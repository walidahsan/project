import React from 'react';
import Dropdowns from './Dropdowns';
import './Section3.css';

const Section3 = () => {
  return (
    <div className="bcolorSection3">
      <div className="container">
        <h2 className="text-center display-3 font-weight-bold m-3">
          WHY CHOOSE US
        </h2>
        <h4 className="text-center display-5 mb-5 ">
          You want results. We have found that the best way to get them We
          provide everything a Developer needs when they are STUCK.
        </h4>
        <Dropdowns />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Section3;
