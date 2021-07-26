import React, { useState } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import ButtonLoading from '../components/ButtonLoading';
import { resetPassword } from '../../../services/member.js';
import styles from './ResetPassword.module.css';

const ResetPassword = ({ history }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsloading(true);
    setIsError(null);
    try {
      await resetPassword(email);
      setIsloading(false);
      history.push('/afterReset');
    } catch (error) {
      setIsError(error);
      setIsloading(false);
    }
  };

  return (
    <Layout>
      <Container style={{ backgroundColor: '#ffe610' }}>
        <h1 className={styles.title}>Find your Power account</h1>
        <p className={styles.text}>
          Enter the email address associated with your account, and
          we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            ></input>
          </div>
          <p className={styles.warning}>
            {isError && isError?.response?.data?.message}
          </p>
          {isLoading ? (
            <button
              disabled={true}
              className={`${styles.btn} ${styles.disabled}`}
            >
              <ButtonLoading />
            </button>
          ) : (
            <button
              type="submit"
              className={styles.btn}
              onClick={handleSubmit}
            >
              Send Reset Link
            </button>
          )}
        </form>
      </Container>
    </Layout>
  );
};

export default ResetPassword;
