import React from 'react';
import styles from './Header.module.css';
import banner from '../../../../assets/banner.png';

const Header = () => (
  <header className={styles.header}>
    <img
      className={styles.logo}
      src={banner}
      alt="property power banner"
    ></img>
  </header>
);

export default Header;
