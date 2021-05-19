import React, { useState } from 'react';
import Card from './components/Card.jsx'
import styles from './Main.module.css';

const Main = () => {
  const [active, setActive] = useState(null);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>ADDRESS</h2>
      <section className={styles.container}>
        <Card active={active} setActive={setActive}/>
      </section>
    </main>
  )
}


export default Main;
