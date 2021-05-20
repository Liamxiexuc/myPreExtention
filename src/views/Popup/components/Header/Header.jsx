import React from 'react';
import styles from './Header.module.css';
import logo from '../../../../assets/icon48.png';

const Header = () => (
  <header className={styles.header}>
    <img className={styles.logo} src={logo} alt="logo"></img>
    <div className={styles.textContainer}>
      <p className={styles.preTitle}>PROPERTY</p>
      <h1 className={styles.title}>POWER</h1>
      <p className={styles.text}>
        Giving you the numbers the listing left out.
      </p>
    </div>
  </header>
);

export default Header;
