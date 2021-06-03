import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { deleteExperiance } from '../../actions/profile';
import { useDispatch } from 'react-redux';

export const Experiance = ({ experiance }) => {
  const dispatch = useDispatch();
  const experiances = experiance.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm"> {exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'NOW'
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => dispatch(deleteExperiance(exp._id))}
          className="btn mybtn btn-danger mybtn"
        >
          DELETE
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Experiance Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiances}</tbody>
      </table>
    </Fragment>
  );
};
