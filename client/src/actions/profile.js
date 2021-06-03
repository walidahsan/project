import {
  PROFILE_ERROR,
  GET_PROFILE,
  UPDATE_PROFLE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_PROFILES,
  GET_REPOS,
} from './types';
import { setAlert } from './alert';
import axios from 'axios';

//GET LOGGED IN USER PROFILE IF EXIST OR NOT

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data, status: err.response.status },
    });

    if (err) {
      dispatch(setAlert(err.response.data, 'danger'));
    }
  }
};

//GET ALL PROFILES OF USERS THAT EXIST

export const getAllProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(`http://localhost:5000/api/profile/`);

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data, status: err.response.status },
    });

    if (err) {
      dispatch(setAlert(err.response.data, 'danger'));
    }
  }
};

//GET PROFILE OF USER BY USER ID  OF WHICH PROFILE IT IS

export const getPrifileByUserId = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/profile/user/${userId}`
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data, status: err.response.status },
    });

    if (err) {
      dispatch(setAlert(err.response.data, 'danger'));
    }
  }
};

//GET GITHUB REPOS

export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/profile/github/${username}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data, status: err.response.status },
    });

    if (err) {
      dispatch(setAlert(err.response.data, 'danger'));
    }
  }
};

//CREATE OR EDIT PROFILE OF LOGGED IN USER

export const editOrCreateProfile =
  (formdata, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const res = await axios.post(
        'http://localhost:5000/api/profile',
        formdata,
        config
      );

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        setAlert(
          edit ? 'Profile Updated' : 'Profile Created Successfully',
          'success'
        )
      );

      if (!edit) {
        history.push('/dashboard');
      }
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.data, status: err.response.status },
      });

      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
    }
  };

//ADD EXPERIANCE OF LOGGED IN USER

export const addExperiance = (formdata, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const res = await axios.put(
      'http://localhost:5000/api/profile/experiance',
      formdata,
      config
    );

    dispatch({
      type: UPDATE_PROFLE,
      payload: res.data,
    });

    dispatch(setAlert('Experiance added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data, status: err.response.status },
    });
  }
};

//ADD EDUCATION OF LOGGED IN USER

export const addEducation = (formdata, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const res = await axios.put(
      'http://localhost:5000/api/profile/education',
      formdata,
      config
    );

    dispatch({
      type: UPDATE_PROFLE,
      payload: res.data,
    });

    dispatch(setAlert('Eductaion added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data, status: err.response.status },
    });
  }
};

//Delete EXPERIANCE OF LOGGED IN USER

export const deleteExperiance = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const res = await axios.delete(
      `http://localhost:5000/api/profile/experiance/${id}`,
      config
    );

    dispatch({
      type: UPDATE_PROFLE,
      payload: res.data,
    });

    dispatch(setAlert('Experiance removed', 'success'));
  } catch (err) {
    console.log(1, err);

    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

//Delete EXPERIANCE OF LOGGED IN USER

export const deleteEducation = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const res = await axios.delete(
      `http://localhost:5000/api/profile/education/${id}`,
      config
    );

    dispatch({
      type: UPDATE_PROFLE,
      payload: res.data,
    });

    dispatch(setAlert('Education removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data, status: err.response.status },
    });
  }
};

//Delete EXPERIANCE OF LOGGED IN USER

export const accRemoved = () => async (dispatch) => {
  if (
    window.confirm('Are you sure you want to delete your account permanantly')
  ) {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      await axios.delete(`http://localhost:5000/api/profile`, config);

      dispatch({
        type: CLEAR_PROFILE,
      });

      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(setAlert('Account deleted', 'success'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.data, status: err.response.status },
      });
    }
  }
};
