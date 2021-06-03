import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import arrow from '../../../img/arrow.png';
import './Landing.css';
import sliderfypimg from '../../../img/sliderfypimg1.jpg';

export const Landing = () => {
  const { isAuthenticated } = useSelector((state) => state.AuthState);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <div className="fypimg">
              <img className="d-block " src={sliderfypimg} alt="First Slide" />
              <div className="Text-Block d-none d-md-block">
                <h2 className="display-4 font-weight-bold ">ARE YOU STUCK?</h2>
                <h2 className=" nds ">Need Some Help?</h2>
              </div>
              <h2 className="display-5 font-weight-bold clk">Click Here!</h2>
              <img className="d-block  arrow" src={arrow} alt="Arrow Image" />
              <Link to="/profiles" className=" btn btn-img devbtn ">
                Yes, Please!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
