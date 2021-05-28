import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = ({ btn }) => (
  <footer className={styles.footer}>
    {btn === 'login' ? (
      <Link className={styles.login} to="/login">
        Login
      </Link>
    ) : (
      <span className={styles.back}>&lt; Back</span>
    )}
  </footer>
);

export default Footer;
