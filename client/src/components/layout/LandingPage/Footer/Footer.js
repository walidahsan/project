import React from 'react';
import './Footer.css';
import FacebookIcon from './facebook.png'
import Instagram from './instagram.png';
import twitter from './twitter.png';
import linkedin from './linkedIn.png'
import logofyp from './logofyp.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="backColor">
        <div className="container">
          <div className="row position ">
            <div className="col-lg-4">
              <Link to="/" className="text-primary ">
                <img src={logofyp} />
              </Link>
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4 ">
                <div className="row">
                <div className="col-lg-3 my-4">
               
                    <a href="facebook.com"  target="_blank"><img src={FacebookIcon} className="d-inline-block" alt="FbSocialicon"/></a>
                    </div>
                    <div className="col-lg-3 my-4">
                    <a href="Instagram.com"  target="_blank"><img src={Instagram} className="d-inline-block" alt="Instagramicon"/></a>
                    </div>
                    <div className="col-lg-3 my-4">
                    <a href="Linkedin.com"  target="_blank"><img src={linkedin} className="" alt="Linkedin"/></a>
                    </div>
                    <div className="col-lg-3 my-4">
                    <a href="twitter.com"  target="_blank"><img src={twitter} className="" alt="twitter"/></a>
                  
                </div>
                </div>
                
               
              </div>
              </div>
              <div className="row">
              <div className="col-lg-4">
              <h3></h3>
              <ul>
                <li className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>
                <li  className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>
                <li className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>

              </ul>
            
            </div>
            
            <div className="col-lg-4 text-white">
            <ul>
                <li className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>
                <li  className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>
                <li className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>

              </ul>
            
            </div>
            <div className="col-lg-4 text-white">
            <ul>
                <li className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>
                <li  className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>
                <li className="p" >
                  <Link to="/" className="text-white">Lorem Ipsum</Link>
                </li>

              </ul>
            
            </div>
          </div>
        {/* <span className="text-white text-center mb-3 ">All Rights Reserved! Created and Developed by BCSF17(R22,S28,S31)</span>*/}
        </div> 
      </footer>
    </div>
  );
};

export default Footer;
