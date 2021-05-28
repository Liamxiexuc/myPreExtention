import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <Layout>
      <Container style={{ backgroundColor: 'white' }}>
        <div className={styles.dashboard}>
          <h1>Welcome XXX && Dashboard Page</h1>
          <Link to="/invite">Invite Another Power User</Link>
          <h3>Your Previous Properties</h3>
          <ul>
            <li>123 Smith street ...</li>
            <li>123 Smith street ...</li>
            <li>123 Smith street ...</li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
}

export default Dashboard;
