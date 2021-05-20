import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './Welcome.module.css';

function Welcome() {
  return (
    <div className={styles.welcome}>
      <h1>
        Welcome Page && This is not a property page
      </h1>
      <Link to='/registration'>
        Join Waitlist
      </Link>
      <a href='https//www.google.com'> Join Group</a>
      <Link to='/login'>
        LOGIN
      </Link>
    </div>
  );
}

export default Welcome;
