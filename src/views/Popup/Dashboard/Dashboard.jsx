/* global chrome */
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import WaveLoading from '../components/WaveLoading';
import { fetchMemberData } from '../../../utils/member.js';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [name, setName] = useState('');
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getMember = async () => {
    setIsloading(true);
    const memberData = await fetchMemberData();
    const { userId, viewedProperty } = memberData;
    setName(userId.fullname);
    setProperties(viewedProperty);
    setIsloading(false);
  };
  useEffect(() => {
    getMember();
  }, []);

  const handleClick = (url) => {
    if (!url) return;
    chrome.tabs.create({ url });
  };

  return (
    <Layout logout={true}>
      <Container style={{ backgroundColor: 'white' }}>
        <div className={styles.dashboard}>
          {isLoading ? (
            <WaveLoading />
          ) : (
            <Fragment>
              <h1 className={styles.title}>WELCOME {name}!</h1>
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
                {properties.map((item) => {
                  const { _id, address, suburb, url } = item;
                  return (
                    <li
                      key={_id}
                      className={styles.li}
                      onClick={() => handleClick(url)}
                    >
                      {`${address}, ${suburb}`}
                    </li>
                  );
                })}
              </ul>
              <h5 className={styles.subtitle}>HOW TO USE</h5>
              <p className={styles.msg}>
                ONCE LOGGED IN, SIMPLY NAVIGATE TO A REALESTATE.COM.AU
                LISTING TO LOAD UP ITS POWER DATA... THIS WINDOW WILL
                UPDATE AUTOMATICALLY.
              </p>
            </Fragment>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export default Dashboard;
