import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { deleteToken } from '../../../../utils/authentication.js';
import styles from './Footer.module.css';

const FooterButton = ({
  lightning,
  logout,
  history,
  page,
  backHome,
}) => {
  const handleClick = () => {
    deleteToken();
    if (page === 'authed') return history.replace('/property');
    history.replace('/');
  };
  const handleBack = () => history.goBack();
  const handleBackHome = () => history.replace('/');
  const backStyle = lightning
    ? `${styles.back} ${styles.lightning}`
    : styles.back;
  if (logout)
    return (
      <span onClick={handleClick} className={backStyle}>
        Logout
      </span>
    );
  if (backHome)
    return (
      <span onClick={handleBackHome} className={backStyle}>
        &lt; Home
      </span>
    );
  return (
    <span onClick={handleBack} className={backStyle}>
      &lt; Back
    </span>
  );
};

const Footer = (props) => {
  const { btn, lightning, logout, history, page, signup, backHome } =
    props;

  return (
    <footer className={styles.footer}>
      {btn === 'login' ? (
        <div className={styles.wrap}>
          <Link
            className={`${styles.btn} ${styles.login}`}
            to="/login"
          >
            Login
          </Link>
          {signup && (
            <Link
              className={`${styles.btn} ${styles.signup}`}
              to="/registration"
            >
              SIGN UP
            </Link>
          )}
        </div>
      ) : (
        <FooterButton
          lightning={lightning}
          logout={logout}
          history={history}
          page={page}
          backHome={backHome}
        />
      )}
    </footer>
  );
};

export default withRouter(Footer);
