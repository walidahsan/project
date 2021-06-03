import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileItems.css';

export const ProfileItems = ({
  profile: {
    location,
    skills,
    company,
    status,
    user: { name, _id, avatar },
  },
}) => {
  const showId = (id) => {
    console.log(id);
  };
  return (
	<div class=" ">
    <div className="">
     <div class=" card  my-3 mx-4">
    <div className=" profile text-center bg-light ">
      <img src={avatar} alt="" className="round-img card-img-top img-fluid" />
      <div>
      <div class="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          {status} {company && <span>at {company}</span>}
        </p>
        {/* <p className="my-1 "> {location && <span>{location}</span>}</p> */}
       
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" />
            {skill}
          </li>
        ))}
      </ul>
      <Link to={`/profile/${_id}`} className="btn btn-primary mybtn">
          View Profile
        </Link>
      </div>
    </div>
	</div>
	</div>
  </div>  

  );
};
