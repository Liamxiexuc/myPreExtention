import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = ({ btn, lightning }) => {
  const backStyle = lightning
    ? `${styles.back} ${styles.lightning}`
    : styles.back;

  return (
    <footer className={styles.footer}>
      {btn === 'login' ? (
        <Link className={styles.login} to="/login">
          Login
        </Link>
      ) : (
        <span className={backStyle}>&lt; Back</span>
      )}
    </footer>
  );
};

export default Footer;
