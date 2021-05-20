import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import { Route, Switch } from "react-router";
import Welcome from './Welcome';
import Registration from './Registration';
import Confirm from './Confirm';
import Login from './Login';
import Dashboard from './Dashboard';
import Invite from './Invite';
import AfterInvite from './AfterInvite';
import Property from './Property';

import styles from './App.module.css';

function App({ isPropertyPage }) {

  const homeComponent = !isPropertyPage ? Welcome : Property;
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path='/' component={homeComponent} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/confirm' component={Confirm} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/invite' component={Invite} />
        <Route exact path='/afterInvite' component={AfterInvite} />
      </Switch>
    </div>
  );
}

export default App;
