import React from 'react';
import './textboxes.css';

const Textboxes = (props) => {
  return (
    <div>
      <div>
        <h2 className="text-light font-weight-bold m-3">{props.names}</h2>
        <h4 className="text-light">{props.pText}</h4>
      </div>
    </div>
  );
};
export default Textboxes;
