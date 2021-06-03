const { validationResult } = require("express-validator/check");
const Post = require("../models/post");
const Profile = require("../models/profile");
const User = require("../models/users");
const io = require("../socket");

//POST USER POST
//PRIVATE POSTING

exports.postUserPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await User.findById(req.user.id).select("-password");

    const newPost = new Post({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    });

    const post = await newPost.save();
    io.getIO().emit("posts", { action: "create", post: post });

    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//GET USERS POSTS
//PRIVATE Route

exports.getUserPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

//GET SINGLE USER POSTS BY POST ID
//PRIVATE Route

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json("No  Post Found");
    }
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

//GET SINGLE USER POSTS BY POST ID
//PRIVATE Route

exports.deletePostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json("No  Post Found");
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json("User Not Authorized");
    }

    await post.remove();

    res.status(200).json({ msg: "Post Removed" });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json("Post Not Found");
    }
    console.error(err);
    res.status(500).json("Server Error");
  }
};

//POST Like Who Liked this
//PUT REQUEST PRIVATE

exports.likeUserPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Post Already liked by you" });
    }

    await post.likes.unshift({ user: req.user.id });

    await post.save();

    io.getIO().emit("like", { action: "create", likes: post.likes  , id : post._id });

    res.json(post.likes);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

//POST Unlike Who Liked this
//PUT REQUEST PRIVATE

exports.unlikeUserPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Post has been not like by you" });
    }

    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();
    io.getIO().emit("unlike", { action: "create", likes: post.likes  , id : post._id });
    res.json(post.likes);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

//POST USER COMMENTS
//PRIVATE POSTING

exports.postUserComments = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await User.findById(req.user.id).select("-password");
    const post = await Post.findById(req.params.id);

    const newComment = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    };
    await post.comments.unshift(newComment);
    await post.save();
    io.getIO().emit("comment", post.comments);
    res.status(200).json(post.comments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.deleteUserComment = async (req, res) => {
  try {
    console.log(1);

    const post = await Post.findById(req.params.id);
    const commentId = await post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    if (!commentId) {
      return res.status(404).json({ msg: "No Comment Found ! " });
    }

    if (commentId.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    await post.comments.splice(removeIndex, 1);

    await post.save();
    res.status(200).json(post.comments);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};
