import React from 'react';
import { Route, Switch } from 'react-router';
import Welcome from './Welcome';
import Registration from './Registration';
import Confirm from './Confirm';
import Login from './Login';
import Dashboard from './Dashboard';
import Invite from './Invite';
import AfterInvite from './AfterInvite';
// import Property from './Property';
import Unauthed from './Property/Unauthed.jsx';
import Authed from './Property/Authed.jsx';
import ErrorPage from './ErrorPage';
import ResetPassword from './ResetPassword';
import AfterReset from './AfterReset';

import styles from './App.module.css';

function App({ isPropertyPage, isLogin }) {
  let homeComponent = Welcome;

  if (isPropertyPage) {
    // homeComponent = isLogin ? Authed : Property;
    homeComponent = isLogin ? Authed : Unauthed;
  }

  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/" component={homeComponent} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/confirm" component={Confirm} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login {...props} isPropertyPage={isPropertyPage} />
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={(props) => (
            <Dashboard {...props} isPropertyPage={isPropertyPage} />
          )}
        />
        <Route exact path="/invite" component={Invite} />
        <Route exact path="/afterInvite" component={AfterInvite} />
        <Route exact path="/authed" component={Authed} />
        {/* <Route exact path="/property" component={Property} /> */}
        <Route exact path="/property" component={Unauthed} />
        <Route exact path="/authedProperty" component={Authed} />
        <Route
          exact
          path="/reset_password"
          component={ResetPassword}
        />
        <Route exact path="/afterReset" component={AfterReset} />
        <Route path="/error" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
