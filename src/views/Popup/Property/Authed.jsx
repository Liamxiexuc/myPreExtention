import React, { useState } from 'react';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import Card from './components/Card.jsx';
import styles from './Authed.module.css';

const data = [
  {
    title: 'ADDRESS',
    value: '20/74 SANDY BAY RD, BATTERY POINT TAS',
  },
  {
    title: 'APPRAISED YIELD',
    value: ' - ',
  },
  {
    title: 'ESTIMATED SALE PRICE',
    value: ' - ',
  },
  {
    title: 'DAYS ON MARKET',
    value: ' - ',
  },
  {
    title: 'DISCOUNTING',
    value: ' - ',
  },
  {
    title: 'VENDOR DISTRESS',
    value: ' - ',
  },
];

const mockData = [
  {
    title: 'PROPERTY INTELLIGENCE',
    data,
  },
  {
    title: 'STREET INTELLIGENCE',
    data,
  },
  {
    title: 'SUBURB INTELLIGENCE',
    data,
  },
  {
    title: 'LGA INTELLIGENCE',
    data,
  },
];

const Authed = () => {
  const [active, setActive] = useState('PROPERTY INTELLIGENCE');

  return (
    <Layout lightning={true}>
      <h1 className={styles.title}>162 MACQUARIE ST, HOBART</h1>
      <main className={styles.property}>
        <section className={styles.container}>
          {mockData.map((i) => (
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
