import React from 'react';
import styles from './ButtonLoading.module.css';

function ButtonLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <span>Loading</span>
    </div>
  );
}

export default ButtonLoading;
