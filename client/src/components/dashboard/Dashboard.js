import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { Spinnerr } from '../layout/Spinner';
import { DashboardActions } from './DashboardActions';
import { Experiance } from './Experiance';
import { Education } from './Education';
import { accRemoved } from '../../actions/profile';

export const Dashboard = () => {
  const { loading, profile, user } = useSelector((state) => state.ProfileState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return !loading && profile === null ? (
    <Spinnerr />
  ) : (
    <Fragment>
      {' '}
      <h1 className="large text-primary"> Dashoard</h1>
      <h4 >
        <i className="fas fa-user display-5" /> Welcome {user.name}
		
      </h4>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experiance experiance={profile.experiance} />
          <Education education={profile.education} />
          <div className="my2">
            <button
              onClick={() => dispatch(accRemoved())}
              className="btn btn-danger mybtn"
            >
              <i className="fas fa-user-minus"></i> DELETE ACCOUNT
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, Please add some info</p>
          <Link to="/create-profile" className="btn btn-primary mybtn my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};
