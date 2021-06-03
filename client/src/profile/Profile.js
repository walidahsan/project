import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinnerr } from '../components/layout/Spinner';
import { getPrifileByUserId } from '../actions/profile';
import { Link } from 'react-router-dom';
import { ProfileTop } from './ProfileTop';
import { ProfileAbout } from './ProfileAbout';
import { ProfileExp } from './ProfileExp';

export const Profile = ({ match }) => {
  console.log('1');
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.ProfileState);
  const {
    isAuthenticated,
    load = loading,
    user,
  } = useSelector((state) => state.AuthState);

  useEffect(() => {
    dispatch(getPrifileByUserId(match.params.id));
  }, []);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinnerr />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn mybtn btn-primary mb-2">
            Back to Profiles
          </Link>
          {isAuthenticated && load === false && user._id === profile.user._id && (
            <Link to="/edit-profile" className="btn mybtn btn-dark">
              Edit Profile
            </Link>
          )}
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary"> Experiance </h2>
            {profile.experiance.length > 0 ? (
              <Fragment>
                {profile.experiance.map((exp, ind) => (
                  <ProfileExp key={ind} experiance={exp} />
                ))}
              </Fragment>
            ) : (
              <h4> There is no Experiance of {profile.user.name}</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
