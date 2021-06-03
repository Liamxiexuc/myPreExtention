import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ btn, lightning, logout, page, children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer
      btn={btn}
      lightning={lightning}
      logout={logout}
      page={page}
    />
  </React.Fragment>
);

export default Layout;
