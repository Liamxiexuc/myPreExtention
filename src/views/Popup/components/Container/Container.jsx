import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, title, bgColor }) => (
  <div className={styles.main}>
    {title && <h1 className={styles.title}>{title}</h1>}
    {bgColor ? (
      <div className={`${styles.container} ${styles.bg}`}>
        {children}
      </div>
    ) : (
      <div className={styles.container}>{children}</div>
    )}
  </div>
);

export default Container;
