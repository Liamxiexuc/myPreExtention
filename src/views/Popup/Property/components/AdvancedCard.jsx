import React from 'react';
import styles from './AdvancedCard.module.css';
import Row from './Row.jsx';

function AdvancedCard({ data }) {
  return (
    <div>
      <section>
        <h5 className={styles.title}>general</h5>
        {data &&
          data.general.map((i) => (
            <Row key={i.title} title={i.title} value={i.value} />
          ))}
      </section>
      <section className={styles.bottom}>
        <h5 className={styles.title}>market data</h5>
        {data &&
          data.market.map((i) => (
            <Row key={i.title} title={i.title} value={i.value} />
          ))}
      </section>
    </div>
  );
}

export default AdvancedCard;
