import React from 'react';
import Momment from 'react-moment';

export const ProfileExp = ({
  experiance: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      <Momment format="YYYY/MM/DD"> {from}</Momment> -{' '}
      {!to ? 'Now' : <Momment format="YYYY/MM/DD">{to}</Momment>}
    </p>
    <p>
      <strong>Position : </strong> {title}
    </p>
    <p>
      <strong>Description :</strong> {description}
    </p>
  </div>
);
