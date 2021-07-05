import React from 'react';
import Layout from '../components/Layout.jsx';
import errorLogo from '../../../assets/auto-fail.svg';
import styles from './ErrorPage.module.css';

export default function ErrorPage({ location }) {
  const errorMsg = location?.state?.error
    ? 'Sorry, the power data is currently not available for this property.'
    : 'Sorry, something went wrong. Please try again later.';
  return (
    <Layout lightning={true}>
      <h1 className={styles.title}>Oops.</h1>
      <p className={styles.text}>{errorMsg}</p>
      <div className={styles.img}>
        <img src={errorLogo} alt="error logo" />
      </div>
    </Layout>
  );
}
