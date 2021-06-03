import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../../actions/auth';
import './Register.css';


export const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const { isAuthenticated } = useSelector((state) => state.AuthState);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      return dispatch(setAlert('Password dont match', 'danger'));
    }

    dispatch(AuthAction({ name, email, password }));
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="container">
     
        <div className="row">
          <div className="col-4"></div>

          <div>
            <div className="form-group  p-4 bshadow">
              <h4 className="text-center font-weight-bold display-4 text-primary">
                SIGNUP FORM
              </h4>
              <form className="form" onSubmit={(e) => onSubmit(e)}>
                <label className="">Enter Username:</label>
                <div className="input-group mb-3">
                  <input
                    className="form-control "
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <label className="">Enter Email :</label>
                <input
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => onChange(e)}
                />
                <label className="">Enter Password:</label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  name="password"
                  onChange={(e) => onChange(e)}
                />
                <label className="">Confrim Password:</label>
                <input
                  className="form-control"
                  type="password"
                  value={password2}
                  name="password2"
                  onChange={(e) => onChange(e)}
                />
                <p>
                  <input type="radio" /> I Accept The{' '}
                  <Link to="/Signup" className="text-primary">
                    Terms &amp; Conditions!
                  </Link>{' '}
                </p>

                <input
                  type="submit"
                  value="SignUp"
                  className=" mybtn btn btn-primary  btn-block  "
                />
              </form>
              <hr className="text-center hline"></hr>
              <p className="my-1">
                Already have an account?{' '}
                <Link to="/signin" className="text-primary">
                  Sign In
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
