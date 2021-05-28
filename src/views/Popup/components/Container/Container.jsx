import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, title, style }) => (
  <div className={styles.main}>
    {title && <h1 className={styles.title}>{title}</h1>}
    <div style={style} className={styles.container}>
      {children}
    </div>
  </div>
);

export default Container;
