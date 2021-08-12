/* global chrome */
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import WaveLoading from '../components/WaveLoading';
import GradeSection from './components/GradeSection.jsx';
import { fetchMemberData } from '../../../utils/member.js';

import styles from './Dashboard.module.css';

function Dashboard({ isPropertyPage }) {
  const [name, setName] = useState('');
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [inviteCount, setInviteCount] = useState(null);

  const getMember = async () => {
    setIsloading(true);
    try {
      const memberData = await fetchMemberData();
      const {
        userId,
        latestPropertyList,
        inviteCount: count,
      } = memberData;
      setName(userId.fullname);
      setProperties(latestPropertyList);
      setInviteCount(count);
      setIsloading(false);
    } catch (error) {
      setIsError(error);
    }
  };
  useEffect(() => {
    getMember();
  }, []);

  const handleClick = (url) => {
    if (!url) return;
    chrome.tabs.create({ url });
  };

  return (
    <Layout logout isPropertyPage={isPropertyPage}>
      <Container
        wrapStyle={{ padding: '0 28px' }}
        style={{ backgroundColor: 'white' }}
      >
        <div className={styles.dashboard}>
          {isError && <Redirect to="/error" />}
          {isLoading ? (
            <WaveLoading />
          ) : (
            <>
              <h1 className={styles.title}>WELCOME {name}!</h1>
              <GradeSection inviteCount={inviteCount} />
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
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export default Dashboard;
