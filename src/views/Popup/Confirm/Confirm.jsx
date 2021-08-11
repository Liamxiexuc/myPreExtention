/* global chrome */
import React from 'react';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import styles from './Confirm.module.css';

function Confirm() {
  const handleClick = () => {
    chrome.tabs.create({
      url: 'https://www.facebook.com/groups/highperformancepropertyinvestment',
    });
  };
  return (
    <Layout backHome>
      <Container title="YOUR NEXT POWER MOVE">
        <h1 className={styles.title}>CONGRATULATIONS!</h1>
        <h2 className={styles.subTitle}>
          YOU ARE ON OUR WAITLIST...{' '}
        </h2>
        <p className={styles.text}>WANT TO SKIP THE QUEUE?</p>
        <p className={styles.text}>
          JOIN OUR FACEBOOK GROUP AND ASK ONE OF THE MEMBERS TO SEND
          YOU A "POWER" INVITE.
        </p>
        <Link onClick={handleClick} className={styles.btn} to="#">
          JOIN GROUP
        </Link>
      </Container>
    </Layout>
  );
}

export default Confirm;
