import React, { useState, useEffect } from 'react';
import Authed from './Authed';
import Unauthed from './Unauthed';
import { fetchToken } from '../../../utils/authentication.js';
import { getContent } from '../../../utils/content.js';

const Property = (props) => {
  const [token, setToken] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchProperty = async () => {
      const property = await getContent();
      setData(property);
    };

    fetchProperty();
  }, []);

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

  return <View data={data} />;
};

export default Property;
