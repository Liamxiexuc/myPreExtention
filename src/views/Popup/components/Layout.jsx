import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ btn, lightning, logout, children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer btn={btn} lightning={lightning} logout={logout} />
  </React.Fragment>
);

export default Layout;
