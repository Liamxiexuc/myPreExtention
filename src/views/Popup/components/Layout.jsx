import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <React.Fragment>
    <Header />
    {props.children}
    <Footer btn={props.btn} />
  </React.Fragment>
);

export default Layout;
