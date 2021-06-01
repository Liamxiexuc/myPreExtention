import React, { useState } from 'react';
import Authed from './Authed';
import Unauthed from './Unauthed';
import { fetchToken } from '../../../utils/authentication.js';
import Layout from '../components/Layout.jsx';
import styles from './Property.module.css';

const Property = (props) => {
  const [token, setToken] = useState(false);
  const getToken = async () => {
    const token = await fetchToken();
    if (JSON.stringify(token) === '{}') {
      return setToken(false);
    } else {
      setToken(true);
    }
  };
  getToken();
  const View = token ? Authed : Unauthed;

  return <View />;
};

export default Property;
