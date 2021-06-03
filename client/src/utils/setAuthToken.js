import axios from 'axios';

//SET AXIOS GLOBAL HEARERS AND SET THE TOKEN IN IT

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
