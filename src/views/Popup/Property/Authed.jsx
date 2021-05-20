import React, { useState } from 'react';
import Card from './components/Card.jsx'
import styles from './Property.module.css';

const data = [
  {
    title: 'Address',
    value: '20/74 SANDY BAY RD, BATTERY POINT TAS'
  },
  {
    title: 'Appraised Yield',
    value: ' - '
  },
  {
    title: 'Estimated Sale Price',
    value: ' - '
  },
  {
    title: 'Days On Market',
    value: ' - '
  },
  {
    title: 'Discounting',
    value: ' - '
  },
  {
    title: 'Vendor Distress',
    value: ' - '
  }
]

const mockData = [
  {
    title: 'Property Intelligence',
    data
  },
  {
    title: 'Street Intelligence',
    data
  },
  {
    title: 'Suburb Intelligence',
    data
  },
  {
    title: 'LGA Intelligence',
    data
  }
]

const Authed = () => {
  const [active, setActive] = useState(null);

  return (
    <main className={styles.property}>
      <h2 className={styles.title}>ADDRESS</h2>
      <section className={styles.container}>
        {mockData.map(i => (
          <Card key={i.title} title={i.title} data={i.data} active={active} setActive={setActive} />
        ))}
      </section>
    </main>
  )
}

export default Authed;
