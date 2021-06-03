import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout.jsx';
import Card from './components/Card.jsx';
import { sendProperty } from '../../../utils/property.js';
import { handlePropertyData } from '../../../utils/tools.js';
import styles from './Authed.module.css';

const Authed = (props) => {
  const [active, setActive] = useState('PROPERTY INTELLIGENCE');
  const [propertyData, setPropertyData] = useState([]);
  const { propertyInfo } = props.location.state;

  useEffect(() => {
    const getPropertyData = async () => {
      const rawPropertyData = await sendProperty(propertyInfo);
      const propertyData = handlePropertyData(rawPropertyData);
      setPropertyData(propertyData);
    };

    getPropertyData();
  }, []);
  return (
    <Layout lightning={true} logout={true}>
      <h1
        className={styles.title}
      >{`${propertyInfo.address}, ${propertyInfo.suburb}`}</h1>
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
    </Layout>
  );
};

export default Authed;
