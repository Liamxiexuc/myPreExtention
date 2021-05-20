import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1>
        Welcome XXX && Dashboard Page
      </h1>
      <Link to='/invite'>
        Invite Another Power User
      </Link>
      <h3>Your Previous Properties</h3>
      <ul>
        <li>123 Smith street ...</li>
        <li>123 Smith street ...</li>
        <li>123 Smith street ...</li>
      </ul>
    </div>
  );
}

export default Dashboard;
