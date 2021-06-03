import React from 'react';
import './TextBox.css';

const TextBox = (props) => {
  // const style = {
  //     border:"border:1px solid black"
  // }

  return (
    <div>
      <h5>{props.children}</h5>
    </div>
  );
};
export default TextBox;
