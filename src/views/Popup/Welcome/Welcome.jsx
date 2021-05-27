import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import styles from './Welcome.module.css';

function Welcome() {
  return (
    <React.Fragment>
      <Layout>
        <div className={styles.msg}>
          <div className={styles.left}></div>
          <div className={styles.mid}>
            <p className={styles.text}>as we are stuill in beta...</p>
            <p className={styles.text}>
              you must be invited to create an account.
            </p>
          </div>
          <div className={styles.right}></div>
        </div>
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
