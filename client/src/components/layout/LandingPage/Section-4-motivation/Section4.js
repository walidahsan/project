import React from 'react';
import sftdev from './sftdev.png';
import Textboxes from './textboxes';
import './Section4.css';

const Section4 = (props) => {
  const BoxNames = {
    name: [
      {
        name: 'Time Saver',
        text: "This website helps the community to complete real-time projects in small amounts of time and find the right solution for their Problems.It really is a timeSaver, Visit Our Website Q/A's for more Clarity",
      },
      {
        name: 'Establishment',
        text: 'Use this platform to connect to the world wide developers world’s largest resource for people who codeto help you increase awareness across DEV Connector’s network of Q&A sites.',
      },
    ],
  };

  return (
    <div className="bcolorSection4">
      <div className="container">
        <div className="row position">
          <div className="col-sm-3 m-5 boxShadow">
            <Textboxes
              names={BoxNames.name[0].name}
              pText={BoxNames.name[0].text}
            />
            <br />
          </div>
          <div className="col-sm-3 mt-5 sftdev  m-5">
            <img src={sftdev} />
            <br />
          </div>
          <div className="col-sm m-5 boxShadow">
            <Textboxes
              names={BoxNames.name[1].name}
              pText={BoxNames.name[1].text}
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
