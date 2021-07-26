import React from 'react';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import Avatar from '../../../assets/avatar.png';
import styles from './AfterReset.module.css';

const AfterReset = () => (
  <Layout>
    <h1 className={styles.title}>RESET LINK SENT!</h1>
    <Container
      style={{
        backgroundColor: '#ffe610',
        paddingBottom: 0,
        borderBottom: 'none',
      }}
    >
      <p className={styles.text}>
        Please check your email, and follow the instructions to reset
        your password.
      </p>
      <img className={styles.img} src={Avatar} alt="Avatar"></img>
    </Container>
  </Layout>
);

export default AfterReset;
