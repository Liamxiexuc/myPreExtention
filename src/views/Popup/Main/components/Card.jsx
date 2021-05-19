import React from 'react';
import Row from './Row.jsx'
import styles from './Card.module.css';

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

const Card = ({active, setActive}) => (
  <div className={styles.card}>
    <h5 className={styles.title}>Property Intelligence</h5>
    <div className={styles.content}>
      {data.map(i => (
        <Row key={i.title} title={i.title} value={i.value} />
      ))}
    </div>
  </div>
);

export default Card;
