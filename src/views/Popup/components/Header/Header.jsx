import React from 'react';
import styles from './Header.module.css';
import bannerText from '../../../../assets/banner_text.png';

const Header = () => (
  <header className={styles.header}>
    <img
      className={styles.logo}
      src={bannerText}
      alt="banner_text"
    ></img>
    <div className={styles.betaContainer}>
      <span className={styles.text}>BETA</span>
    </div>
  </header>
);

export default Header;
