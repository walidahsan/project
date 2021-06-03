import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_POSTS,
  ADD_POST,
  POSTS_ERROR,
  UPDATE_LIKES,
  ERROR_LIKES,
  DELETE_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './types';

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

export const addLike = (id) => async (dispatch) => {
  try {
    console.log('try');

    const res = await axios.put(`http://localhost:5000/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    console.log('catch');
    dispatch({
      type: ERROR_LIKES,
      payload: err.response,
    });
  }
};

export const updateSocketLikes = (data) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_LIKES,
      payload: { likes: data.likes, id: data.id },
    });
  } catch (err) {
    console.log('catch');
    dispatch({
      type: ERROR_LIKES,
      payload: err.response,
    });
  }
};

export const removeLike = (id) => async (dispatch) => {
  console.log(id);

  try {
    const res = await axios.put(`http://localhost:5000/api/posts/unlike/${id}`);
    console.log('🚀 ~ file: post.js ~ line 71 ~ removeLike ~ res', res.data);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    console.log('catch');
    dispatch({
      type: ERROR_LIKES,
      payload: err.response,
    });
  }
};

export const removeSocketLikes = (data) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_LIKES,
      payload: { likes: data.likes, id: data.id },
    });
  } catch (err) {
    console.log('catch');
    dispatch({
      type: ERROR_LIKES,
      payload: err.response,
    });
  }
};

export const deletePostById = (id) => async (dispatch) => {
  console.log(id);

  try {
    console.log('try');

    await axios.delete(`http://localhost:5000/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    dispatch(setAlert('Post Removed ! ', 'danger'));
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `http://localhost:5000/api/posts`,
      formData,
      config
    );

    // dispatch({
    //   type: ADD_POST,
    //   payload: res.data,
    // });

    dispatch(setAlert('Post Created  ! ', 'success'));
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

export const incommingPostsSocket = (data) => async (dispatch) => {
  try {
    dispatch({
      type: 'CREATE_SOCKET_POST',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `http://localhost:5000/api/posts/comments/${postId}`,
      formData,
      config
    );
    console.log('🚀 ~ file: post.js ~ line 194 ~ addComment ~ res', res.data);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert('Comment Added  ! ', 'success'));
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

export const incomingSocketComments = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMMENT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  console.log(postId, commentId);

  try {
    await axios.delete(
      `http://localhost:5000/api/posts/comment/${postId}/${commentId}`
    );

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert('Comment Removed  ! ', 'success'));
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};
