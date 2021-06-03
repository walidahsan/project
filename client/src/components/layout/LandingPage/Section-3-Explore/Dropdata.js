import React from 'react';

import DropArrow from './DropArrow.png';
import './Dropdata.css';

const Dropdata = (props) => {
  return (
    <div className="position">
      <h4>{props.children} </h4>
      <img className="arrowpic" onClick={props.clicked} />
    </div>
  );
};
export default Dropdata;
