import { combineReducers } from 'redux';
import { AlertState } from './alert';
import { AuthState } from './auth';
import { ProfileState } from './profile';
import { PostState } from './post';

export default combineReducers({
  AlertState,
  AuthState,
  ProfileState,
  PostState,
});
