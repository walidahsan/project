import React from 'react';
import OurDevs from './Ourdevs';
import './Section5.css';
import Userimg1 from './Userimg1.jpg';
import Userimg2 from './Userimg2.jpg';
import Userimg3 from './Userimg3.jpg';

const Section5 = () => {
  const usernames = {
    Username: [
      {
        username: 'UserName1',
      },
      {
        username: 'UserName2',
      },
      {
        username: 'UserName3',
      },
    ],
  };

  const Reviews = {
    review: [
      {
        reviews:
          '"They have a good team of developers with a good project manager, so I suggest working with them."',
      },
      {
        reviews:
          '"We are extremely impressed with their architecture and coding practices."',
      },
      {
        reviews:
          '"They always find a way to figure something out, even when its new territory for them."',
      },
    ],
  };

  return (
    <div className="container">
      <div>
        <h2 className="text-center display-3 font-weight-bold m-4">
          OurDev Reviews
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-3 m-4">
          <OurDevs
            img1={Userimg1}
            Usernames={usernames.Username[0].username}
            reviews={Reviews.review[0].reviews}
          >
            <img src={Userimg1} className=" center mb-3 USerimg " />
          </OurDevs>
        </div>
        <div className="col-sm-3 m-5">
          <OurDevs
            img2={Userimg2}
            Usernames={usernames.Username[1].username}
            reviews={Reviews.review[1].reviews}
          >
            <img src={Userimg2} className=" center mb-3  USerimg " />
          </OurDevs>
        </div>
        <div className="col-sm-3 m-4">
          <OurDevs
            img3={Userimg3}
            Usernames={usernames.Username[2].username}
            reviews={Reviews.review[2].reviews}
          >
            <img src={Userimg3} className=" center mb-3 USerimg " />
          </OurDevs>
        </div>
      </div>
    </div>
  );
};

export default Section5;
