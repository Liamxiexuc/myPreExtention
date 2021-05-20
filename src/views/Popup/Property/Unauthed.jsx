import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './Property.module.css';

const Unauthed = () => {

  return (
    <main className={styles.unauthed}>
      <h2 className={styles.title}>ADDRESS</h2>
      <section className={styles.unauthedContainer}>
        <h5>We have loaded XX "POWER" data points for this</h5>
        <h3>LOGIN OR GET AN INVITE TO VIEW</h3>
        <Link to='/login'>
          LOGIN
        </Link>
        <Link to='/registration'>
          JOIN WAITLIST
        </Link>
      </section>
    </main>
  )
}


export default Unauthed;
