/* global chrome */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import WaveLoading from '../components/WaveLoading';
import { getPropertyInfo } from '../../../utils/content.js';
import styles from './Property.module.css';

const Property = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    chrome.tabs.create({
      url: 'https://www.facebook.com/groups/highperformancepropertyinvestment',
    });
  };

  useEffect(() => {
    const fetchProperty = async () => {
      setIsError(false);
      setIsloading(true);
      try {
        const propertyInfo = await getPropertyInfo();
        setData(propertyInfo);
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
        setIsError(error);
      }
    };

    fetchProperty();
  }, []);

  return (
    <Layout btn="login">
      <Container style={{ backgroundColor: 'white' }}>
        {isError && <Redirect to="/error" />}
        {isLoading ? (
          <WaveLoading />
        ) : (
          <main className={styles.unauthed}>
            <h1
              className={styles.title}
            >{`${data.address}, ${data.suburb}`}</h1>
            <p className={styles.msg}>
              We have loaded up to 81 "POWER" data points for this
            </p>
            <p className={styles.text}>
              <Link className={styles.link} to="/login">
                LOGIN
              </Link>
              <span>OR</span>
              <Link
                onClick={handleClick}
                className={styles.link}
                to="#"
              >
                GET AN INVITE
              </Link>
              <span>TO VIEW</span>
            </p>
            <Link className={styles.btn} to="/login">
              LOGIN
            </Link>
            <Link className={styles.btn} to="/registration">
              JOIN WAITLIST
            </Link>
          </main>
        )}
      </Container>
    </Layout>
  );
};

export default Property;
