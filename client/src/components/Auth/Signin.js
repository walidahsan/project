import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Login } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import './Signin.css';

export const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.AuthState);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(Login(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 boxtable m-4 pb-4 pl-4 pt-2 form-group">
            <h3 className="text-center display-4 font-weight-bold  text-primary">
              LOGIN FORM
            </h3>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <label className="mt-4 mb-2">Email:</label>

              <div className="input-group ">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>

                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <label className="mt-4 ">Password:</label>

              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />

              <p>
                {' '}
                <input type="radio" /> Remember Me!
              </p>
              <input
                type="submit"
                value="LogIn"
                className="btn btn-primary btn-block mb-2 "
              />
            </form>
            <Link to="/login" className="text-primary">
              Forgot Your Password?
            </Link>
            <div>
              <hr></hr>
            </div>
            <div className="mb-2">
              <p>
                Not a Mmeber Yet?{' '}
                <Link to="/register" className="text-primary">
                  {' '}
                  Proceed to Signup!
                </Link>
              </p>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </Fragment>
  );
};
