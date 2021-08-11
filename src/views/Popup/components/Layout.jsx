import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, ...rest }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer {...rest} />
  </React.Fragment>
);

export default Layout;
