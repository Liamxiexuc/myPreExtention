import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, title }) => (
  <div className={styles.welcome}>
    {title && <h1 className={styles.title}>{title}</h1>}
    <div className={styles.container}>{children}</div>
  </div>
);

export default Container;
