import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../../actions/post';
import { Spinnerr } from '../layout/Spinner';
import { PostItem } from '../posts/PostItem';
import { CommentForm } from './CommentForm';
import { CommentItems } from './CommentItems';
import { io } from 'socket.io-client';
import { incomingSocketComments } from '../../actions/post';

export const Post = ({ match }) => {
  const { post, loading } = useSelector((state) => state.PostState);
  const { user } = useSelector((state) => state.AuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(match.params.id));
    const socket = io('http://localhost:5000');
    socket.on('comment', (data) => {
      dispatch(incomingSocketComments(data));
    });
  }, []);

  return loading || post === null ? (
    <Spinnerr />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn mybtn btn-dark">
        Back To Posts
      </Link>
      <br/>
      <br/>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment, ind) => (
          <CommentItems
            key={ind}
            comments={comment}
            postId={post._id}
            userObj={user}
          />
        ))}
      </div>
    </Fragment>
  );
};
