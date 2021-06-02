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
    <Layout btn="login">
      <Container title="YOUR NEXT POWER MOVE">
        <h1 className={styles.title}>CONGRATULATIONS!</h1>
        <p className={styles.text}>YOUR ARE IN THE QUEUE...</p>
        <p className={styles.text}>TAKE ME TO THE FACEBOOK GROUP</p>
        <p className={styles.text}>THERE MIGHT BE A FAST WAY</p>
        <p className={styles.text}>
          JOIN OUR FACEBOOK GROUP AND ASK ONE OF THE MEMBERS TO SEND
          YOU A "POWER" INVITE.
        </p>
        <p className={styles.text}>SIMPLE.</p>
        <Link onClick={handleClick} className={styles.btn} to="#">
          TAKE ME TO THE FACEBOOK GROUP
        </Link>
      </Container>
    </Layout>
  );
}

export default Confirm;
