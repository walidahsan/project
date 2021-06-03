import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Logout } from '../../../actions/auth';
import logofyp from './logofyp.png';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import './Navbar.css';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.AuthState);

  const authLinks = (
    <div>
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-sign-out-alt"></i> <span>Dashboard </span>
          </Link>
        </li>
        <li>
          <a onClick={() => dispatch(Logout())} href="#!">
            <i className="fas fa-sign-out-alt"></i>{' '}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <div className="Guestlinks">
      <div>
        <div className="row">
          <div className="col-lg-4"></div>
          <ul>
            <li className="nav-link ">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/profiles" exact>
                Developers
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/signin" exact>
                Login
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/register" exact>
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="srchbar">
        <Searchbar />
      </div>
    </div>
  );
  return (
    <nav className="navbar navbar-expand-sm container navbar-nav">
      <h1>
        <Link to="/" className="text-primary ">
          <img src={logofyp} />
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
