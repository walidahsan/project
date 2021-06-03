import React from 'react';
import './Ourdevs.css';

const OurDevs = (props) => {
  return (
    <div className="mt-5 mb-5 boxShadowU ">
      {props.children}
      <h5 className="text-center mt-4 font-weight-bold">{props.Usernames}</h5>
      <label className="text-center ml-3 mr-3 mb-3">{props.reviews}</label>
    </div>
  );
};

export default OurDevs;
