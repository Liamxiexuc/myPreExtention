import React from 'react';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import Avatar from '../../../assets/avatar.png';
import styles from './AfterInvite.module.css';

const AfterInvite = () => (
  <Layout backHome>
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
      <img className={styles.img} src={Avatar} alt="Avatar"></img>
    </Container>
  </Layout>
);

export default AfterInvite;
