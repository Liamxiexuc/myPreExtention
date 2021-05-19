import React from 'react';
import Row from './Row.jsx'
import styles from './Card.module.css';

const Card = ({ title, data, active, setActive }) => {
  const handleClick = () => {
    if (title === active) return setActive(null);
    setActive(title);
  }

  const wrapperStyle = title === active ? `${styles.wrapper} ${styles.active}` : styles.wrapper;

  const Content = title === active ? (
    <div className={styles.content}>
      {data.map(i => (
        <Row key={i.title} title={i.title} value={i.value} />
      ))}
    </div>
  ) : null;

  return (
    <div className={styles.card}>
      <h5 className={styles.title} onClick={handleClick}>{title}</h5>
      <div className={wrapperStyle}>
        {Content}
      </div>
    </div>
  )
}


export default Card;
