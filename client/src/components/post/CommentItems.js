import React from 'react';
import { deleteComment } from '../../actions/post';
import { useSelector, useDispatch } from 'react-redux';
import Momment from 'react-moment';
import { Link } from 'react-router-dom';

export const CommentItems = ({
  userObj,
  postId,
  comments: { _id, text, name, avatar, user, date },
}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.AuthState);

  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img class="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p class="post-date">
          Posted on <Momment format="YYYY/MM/DD">{date}</Momment>
        </p>
        {!loading && user === userObj._id && (
          <button
            className="btn btn-danger mybtn"
            type="button"
            onClick={() => dispatch(deleteComment(postId, _id))}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};
