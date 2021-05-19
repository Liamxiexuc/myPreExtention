import React from 'react';
import Header from './Header';
import Main from './Main';
import Registration from './Registration';
import Footer from './Footer'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      {/* <Main /> */}
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
