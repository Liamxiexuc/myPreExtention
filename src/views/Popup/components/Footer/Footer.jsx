import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { deleteToken } from '../../../../utils/authentication.js';
import styles from './Footer.module.css';

const FooterButton = ({
  lightning,
  logout,
  history,
  backHome,
  home,
  isPropertyPage,
}) => {
  const handleClick = () => {
    deleteToken();
    if (isPropertyPage) return history.replace('/property');
    return history.replace('/');
  };
  const handleBack = () => history.goBack();
  const handleBackHome = () => history.replace('/');
  const handleClickHome = () => history.push('/dashboard');
  const backStyle = lightning
    ? `${styles.back} ${styles.lightning}`
    : styles.back;
  if (logout)
    return (
      <div className={styles.wrap}>
        {isPropertyPage && (
          <span onClick={handleBack} className={backStyle}>
            &lt; Back
          </span>
        )}
        <span onClick={handleClick} className={backStyle}>
          Logout
        </span>
      </div>
    );
  if (home)
    return (
      <span onClick={handleClickHome} className={backStyle}>
        Home
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

const Footer = ({ btn, signup, ...rest }) => {
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
        <FooterButton {...rest} />
      )}
    </footer>
  );
};

export default withRouter(Footer);
