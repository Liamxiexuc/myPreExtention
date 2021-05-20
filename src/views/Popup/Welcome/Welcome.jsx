import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import styles from './Welcome.module.css';

function Welcome() {
  return (
    <React.Fragment>
      <Layout>
        <div className={styles.welcome}>
          <h1>Welcome Page && This is not a property page</h1>
          <Link to="/registration">Join Waitlist</Link>
          <a href="https//www.google.com"> Join Group</a>
          <Link to="/login">LOGIN</Link>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default Welcome;
