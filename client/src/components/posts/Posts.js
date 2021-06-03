import React, { Fragment, useEffect } from 'react';
import { Spinnerr } from '../layout/Spinner';
import {
  getPosts,
  incommingPostsSocket,
  updateSocketLikes,
  removeSocketLikes,
} from '../../actions/post';
import { useDispatch, useSelector } from 'react-redux';
import { PostItem } from './PostItem';
import { PostForm } from './PostForm';
import { io } from 'socket.io-client';

export const Posts = () => {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.PostState);
  const { user } = useSelector((state) => state.AuthState);

  useEffect(() => {
    dispatch(getPosts());
    const socket = io('http://localhost:5000');
    socket.on('posts', (data) => {
      dispatch(incommingPostsSocket(data.post));
    });
    socket.on('like', (data) => {
      dispatch(updateSocketLikes(data));
    });
    socket.on('unlike', (data) => {
      dispatch(removeSocketLikes(data));
    });
  }, []);
  return loading ? (
    <Spinnerr />
  ) : (
    <Fragment>
      <h1 className="large text-primary text-center font-weight-bold text-uppercase"> Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the Community, Please Discuss Your Queries Here!
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} authUser={user} />
        ))}
      </div>
    </Fragment>
  );
};
