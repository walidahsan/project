import React, { Fragment, useEffect } from 'react';
import { ProfileItems } from './ProfileItems';
import { Spinnerr } from '../layout/Spinner';
import { getAllProfiles } from '../../actions/profile';
import { useDispatch, useSelector } from 'react-redux';

export const Profiles = () => {
  const dispatch = useDispatch();
  const { profiles, loading } = useSelector((state) => state.ProfileState);

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [getAllProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinnerr />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and Connect with
            develoeprs
          </p>
          <div className="row">
          
              
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItems key={profile._id} profile={profile} />
              ))
            ) : (
              <h4> No Profiles Found ... </h4>
            )}
            </div>
          
         
        </Fragment>
      )}
    </Fragment>
  );
};
