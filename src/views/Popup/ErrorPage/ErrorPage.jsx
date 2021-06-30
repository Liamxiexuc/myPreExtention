import React from 'react';
import Layout from '../components/Layout.jsx';
import errorLogo from '../../../assets/auto-fail.svg';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <Layout lightning={true}>
      <h1 className={styles.title}>Oops.</h1>
      <p className={styles.text}>
        Sorry, something went wrong. Please try again later.
      </p>
      <div className={styles.img}>
        <img src={errorLogo} alt="error logo" />
      </div>
    </Layout>
  );
}
