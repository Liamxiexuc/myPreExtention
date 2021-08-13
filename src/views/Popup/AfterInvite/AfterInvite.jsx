import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import Avatar from '../../../assets/avatar.png';
import styles from './AfterInvite.module.css';

const AfterInvite = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const clock = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  return (
    <Layout backHome>
      {count < 1 && <Redirect to="/" />}
      <h1 className={styles.title}>WELL DONE!</h1>
      <Container
        style={{
          backgroundColor: '#ffe610',
          paddingBottom: 0,
          borderBottom: 'none',
        }}
      >
        <p className={styles.text}>
          YOUR INVITATIONS WILL BE MUCH APPRECIATED.
        </p>
        <p className={styles.text}>
          YOU WILL BE AUTOMATICALLY REDIRECT TO HOME PAGE IN
          {` ${count} `}
          SECONDS.
        </p>
        <img className={styles.img} src={Avatar} alt="Avatar"></img>
      </Container>
    </Layout>
  );
};

export default AfterInvite;
