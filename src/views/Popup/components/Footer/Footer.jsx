import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { deleteToken } from '../../../../utils/authentication.js';
import styles from './Footer.module.css';

const FooterButton = ({ lightning, logout, history, page }) => {
  const handleClick = () => {
    deleteToken();
    if (page === 'authed') return history.replace('/property');
    history.replace('/');
  };
  const handleBack = () => {
    history.goBack();
  };
  const backStyle = lightning
    ? `${styles.back} ${styles.lightning}`
    : styles.back;
  if (logout)
    return (
      <span onClick={handleClick} className={backStyle}>
        Logout
      </span>
    );
  return (
    <span onClick={handleBack} className={backStyle}>
      &lt; Back
    </span>
  );
};

const Footer = (props) => {
  const { btn, lightning, logout, history, page } = props;

  return (
    <footer className={styles.footer}>
      {btn === 'login' ? (
        <Link className={styles.login} to="/login">
          Login
        </Link>
      ) : (
        <FooterButton
          lightning={lightning}
          logout={logout}
          history={history}
          page={page}
        />
      )}
    </footer>
  );
};

export default withRouter(Footer);
