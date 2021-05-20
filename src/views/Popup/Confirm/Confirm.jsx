import React from 'react';
import Layout from '../components/Layout.jsx';
import { Link } from 'react-router-dom';
import styles from './Confirm.module.css';

function Confirm() {
  return (
    <Layout>
      <div className={styles.confirm}>
        <h1>Waitlist confirm Page</h1>
        <a href="https//www.google.com"> Join Group</a>
        <Link to="/login">LOGIN</Link>
      </div>
    </Layout>
  );
}

export default Confirm;
