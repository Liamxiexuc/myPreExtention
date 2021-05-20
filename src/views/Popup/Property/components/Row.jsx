import React from 'react';
import styles from './Row.module.css';

function Row({ title, value }) {
  return (
    <div className={styles.row}>
      <span>{title}:</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

export default Row;
