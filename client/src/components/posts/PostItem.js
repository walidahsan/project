import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLike, removeLike, deletePostById } from '../../actions/post';

export const PostItem = ({
  showActions = true,
  authUser,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  const { loading } = useSelector((state) => state.AuthState);
  const dispatch = useDispatch();

  return (
    <div className="posts">
      <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img className="round-img" src={avatar} alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">{text}</p>
          <p className="post-date">
            Posted On
            <Moment format="YYYY/MM/DD"> {date}</Moment>
          </p>
          {showActions && (
            <Fragment>
              <button
                onClick={() => dispatch(addLike(_id))}
                type="button"
                className="btn btn-light mybtn btn-outline-primary mx-3"
              >
                <i className="fas fa-thumbs-up"></i>{' '}
                <span>
                  {likes.length > 0 && (
                    <span className="comment-count">{likes.length}</span>
                  )}
                </span>
              </button>
              <button
                onClick={() => dispatch(removeLike(_id))}
                type="button"
                className="btn btn-light mybtn btn-outline-danger mx-3"
              >
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/posts/${_id}`} className="btn btn-primary mybtn mx-3">
                Discussion{' '}
                {comments.length > 0 && (
                  <span className="comment-count">{comments.length}</span>
                )}
              </Link>
              {!loading && user === authUser._id && (
                <button
                  onClick={() => dispatch(deletePostById(_id))}
                  type="button"
                  className="btn mybtn btn-danger"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
