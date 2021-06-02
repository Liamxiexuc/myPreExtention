/* global chrome */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import { fetchToken } from '../../../utils/authentication.js';
import { getPropertyInfo } from '../../../utils/content.js';
import styles from './Property.module.css';

const Property = (props) => {
  const [data, setData] = useState({});

  const getToken = async (propertyInfo) => {
    const token = await fetchToken();
    if (JSON.stringify(token) === '{}') {
      return null;
    } else {
      props.history.push({
        pathname: '/authed',
        state: {
          propertyInfo,
        },
      });
    }
  };

  useEffect(() => {
    const fetchProperty = async () => {
      const propertyInfo = await getPropertyInfo();
      setData(propertyInfo);
      await getToken(propertyInfo);
    };

    fetchProperty();
  }, []);

  return (
    <Layout btn="login">
      <Container style={{ backgroundColor: 'white' }}>
        <main className={styles.unauthed}>
          <h1
            className={styles.title}
          >{`${data.address}, ${data.suburb}`}</h1>
          <p className={styles.msg}>
            We have loaded XX "POWER" data points for this
          </p>
          <p className={styles.text}>
            <Link className={styles.link} to="/login">
              LOGIN
            </Link>
            <span>OR</span>
            <Link className={styles.link}>GET AN INVITE</Link>
            <span>TO VIEW</span>
          </p>
          <Link className={styles.btn} to="/login">
            LOGIN
          </Link>
          <Link className={styles.btn} to="/registration">
            JOIN WAITLIST
          </Link>
        </main>
      </Container>
    </Layout>
  );
};

export default withRouter(Property);
