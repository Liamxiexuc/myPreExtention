import React, { useState } from 'react';
import Authed from './Authed';
import Unauthed from './Unauthed';
import Layout from '../components/Layout.jsx';
import styles from './Property.module.css';


const Property = () => {
  const token = true;
  const View = token ? Authed : Unauthed;

  return (
    <Layout>
      <View />
    </Layout>
  )
}

export default Property;
