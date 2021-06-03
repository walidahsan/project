import React, { useState } from 'react';
import { addComment } from '../../actions/post';
import { useDispatch } from 'react-redux';

export const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(' ');

  return (
    <div className="post-form">
      <div className="bg-primary mybtn text-center text-white p">
        <h3>Leave a Comment </h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addComment(postId, { text }));
          setText(' ');
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark mybtn px-4 my-2" value="Submit" />
      </form>
    </div>
  );
};
