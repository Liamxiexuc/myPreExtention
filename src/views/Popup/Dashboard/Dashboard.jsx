import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <Layout>
      <Container style={{ backgroundColor: 'white' }}>
        <div className={styles.dashboard}>
          <h1 className={styles.title}>WELCOME ENGELBERT!</h1>
          <p className={styles.msg}>
            UNLOCK THE ADVANCED POWER FEATURES...
          </p>
          <Link className={styles.btn} to="/invite">
            INVITE ANOTHER POWER USER
          </Link>
          <h5 className={styles.subtitle}>
            YOUR PREVIOUS PROPERTIES:
          </h5>
          <ul className={styles.list}>
            <li className={styles.li}>92 REGENT ST, SANDY BAY</li>
            <li className={styles.li}>162 MACQUARIE ST, HOBART</li>
            <li className={styles.li}>
              8 WATERLOO CRESCENT, BATTERY POINT
            </li>
          </ul>
          <h5 className={styles.subtitle}>HOW TO USE</h5>
          <p className={styles.msg}>
            ONCE LOGGED IN, SIMPLY NAVIGATE TO A REALESTATE.COM.AU
            LISTING TO LOAD UP ITS POWER DATA... THIS WINDOW WILL
            UPDATE AUTOMATICALLY.
          </p>
        </div>
      </Container>
    </Layout>
  );
}

export default Dashboard;
