import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Card from './components/Card.jsx';
import { sendProperty } from '../../../utils/property.js';
import { handlePropertyData } from '../../../utils/tools.js';
import { getPropertyInfo } from '../../../utils/content.js';
import Loading from '../components/Loading';
import styles from './Authed.module.css';

const Authed = () => {
  const [active, setActive] = useState('PROPERTY INTELLIGENCE');
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPropertyData = async () => {
      setIsError(false);
      setIsLoading(true);
      const propertyInfo = await getPropertyInfo();
      setData(propertyInfo);
      try {
        const rawPropertyData = await sendProperty(propertyInfo);
        const propertyData = handlePropertyData(rawPropertyData);
        setPropertyData(propertyData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error);
      }
    };

    getPropertyData();
  }, []);

  return (
    <Layout lightning={true} logout={true} page={'authed'}>
      {isError && <Redirect to="/error" />}

      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <h1
            className={styles.title}
          >{`${data.address}, ${data.suburb}`}</h1>
          <main className={styles.property}>
            <section className={styles.container}>
              {propertyData &&
                propertyData.map((i) => (
                  <Card
                    key={i.title}
                    title={i.title}
                    data={i.data}
                    active={active}
                    setActive={setActive}
                  />
                ))}
            </section>
          </main>
        </Fragment>
      )}
    </Layout>
  );
};

export default Authed;
