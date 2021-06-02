import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Authed from './Authed';
import Unauthed from './Unauthed';
import { fetchToken } from '../../../utils/authentication.js';
import { getPageContent } from '../../../utils/content.js';

const Property = (props) => {
  const [token, setToken] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchProperty = async () => {
      const property = await getPageContent();
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
  console.log(data);

  return (
    <Fragment>
      {token && <Redirect to="/authed" />}
      <Unauthed data={data} />
    </Fragment>
  );
};

export default Property;
