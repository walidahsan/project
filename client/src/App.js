import React, { Fragment, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Landing } from './components/layout/LandingPage/Landing';
import { Register } from './components/Auth/Register';
import { Signin } from './components/Auth/Signin';
import { Alert } from './components/layout/Alert';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { useDispatch } from 'react-redux';
import { Dashboard } from './components/dashboard/Dashboard';
import { PrivateRoute } from './components/routing/PrivateRoute';
import { CreateProfile } from './components/profile-form/CreateProfile';
import { EditProfile } from './components/profile-form/EditProfile';
import { AddExperiance } from './components/profile-form/AddExperiance';
import { AddEducation } from './components/profile-form/AddEducation';
import { Profiles } from './components/profiles/Profiles';
import { Profile } from './profile/Profile';
import { Posts } from './components/posts/Posts';
import { Post } from './components/post/Post';
import Home from './components/layout/Home';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperiance}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </>
  );
};
export default App;
