import React from 'react';
import './TextdialougeBox.css';
import Section2pic1 from './Section2pic1.png';
import Section2pic2 from './Section2pic2.png';
import Section2pic3 from './Section2pic3.png';

import TextBox from './TextBox';

const TextdialougeBox = () => {
  return (
    <div className="row TextBoxPosition">
      <div className=" col-sm-3 tx1">
        <div className="  boxShadowP ">
          <div className="pspacing">
            <TextBox>
              <img src={Section2pic1} className="pic" />
              Coding and debugging. Designing computer structures.
              Troubleshooting system errors. Writing computer instructions.
              Managing database systems. Maintaining operating systems. Editing
              source-code. Profiling and analyzing algorithms.
            </TextBox>
          </div>
        </div>
      </div>
      <div className=" col-sm-3 tx2">
        <div className="  boxShadowP ">
          <div className="pspacing">
            <TextBox>
              <img src={Section2pic2} className="pic2" />
              Coding and debugging. Designing computer structures.
              Troubleshooting system errors. Writing computer instructions.
              Managing database systems. Maintaining operating systems. Editing
              source-code. Profiling and analyzing algorithms.
            </TextBox>
          </div>
        </div>
      </div>
      <div className=" col-sm-3 tx3">
        <div className="  boxShadowP ">
          <div className="pspacing">
            <TextBox>
              <img src={Section2pic3} className="pic3" />
              Coding and debugging. Designing computer structures.
              Troubleshooting system errors. Writing computer instructions.
              Managing database systems. Maintaining operating systems. Editing
              source-code. Profiling and analyzing algorithms.
            </TextBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextdialougeBox;
