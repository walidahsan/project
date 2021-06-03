import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  AUTH_FAILED,
  LOAD_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';
import { setAuthToken } from '../utils/setAuthToken';

//LOAD USER ON EVERY REQUEST FOR MANAGING STATE TOKEN AND USER STILL ONLINE

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth');

    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_FAILED,
    });
  }
};

//REGISTER_USER

export const AuthAction =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(
        'http://localhost:5000/api/users',
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

//LOGIN USER WITH CREDENTIALS

export const Login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/auth/',
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    await dispatch(loadUser());

    dispatch(setAlert('Welcome To the Dev-Connectors :)', 'success'));
  } catch (err) {
    const errors = err.response.data.msg;

    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//LOGOUT

export const Logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch(setAlert('Successfully Logout', 'success'));
  dispatch({
    type: CLEAR_PROFILE,
  });
};
