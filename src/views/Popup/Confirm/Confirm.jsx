import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './Confirm.module.css';

function Confirm() {
  return (
    <div className={styles.confirm}>
      <h1>
        Waitlist confirm Page
      </h1>
      <a href='https//www.google.com'> Join Group</a>
      <Link to='/login'>
        LOGIN
      </Link>
    </div>
  );
}

export default Confirm;
