import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import formCreate from '../components/formCreate.js';
import ButtonLoading from '../components/ButtonLoading';
import { login } from '../../../services/auth.js';
import { setToken } from '../../../utils/authentication.js';
import {
  emailRules,
  passwordRules,
  emailFormatRules,
  passwordLengthRules,
} from '../../../utils/validation.js';
import styles from './Login.module.css';

@formCreate
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
    };
  }
  submit = (event) => {
    event.preventDefault();
    this.setState({ error: null });
    const { getFieldsValue, validateFields, isPropertyPage } =
      this.props;
    validateFields(async (err, values) => {
      const data = getFieldsValue();
      const keyLength = Object.keys(data).length;
      const isEmpty = keyLength > 1 ? false : true;
      if (err || isEmpty) return;
      try {
        this.setState({ isLoading: true });
        const token = await login(data);
        setToken(token);
        this.setState({ isLoading: false });
        if (isPropertyPage)
          return this.props.history.replace('/authedProperty');
        this.props.history.replace('/dashboard');
      } catch (error) {
        return this.setState({ error, isLoading: false });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props;
    const { isLoading } = this.state;
    const error = { ...this.state.error };
    const serverErrorMsg = error?.response?.data?.message;

    return (
      <Layout>
        <Container style={{ backgroundColor: '#ffe610' }}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.sole}>
            <div className={styles.row}>
              <label htmlFor="email" className={styles.label}>
                EMAIL
              </label>
              {getFieldDecorator(
                'email',
                {
                  rules: [emailRules, emailFormatRules],
                },
                serverErrorMsg,
              )(
                <input
                  id="email"
                  className={styles.input}
                  type="email"
                  placeholder="please input your email"
                />,
              )}
            </div>
          </div>
          <div className={styles.sole}>
            <div className={styles.row}>
              <label htmlFor="password" className={styles.label}>
                PASSWORD
              </label>
              {getFieldDecorator(
                'password',
                {
                  rules: [passwordRules, passwordLengthRules],
                },
                serverErrorMsg,
              )(
                <input
                  id="password"
                  className={styles.input}
                  type="password"
                  placeholder="please input your password"
                />,
              )}
            </div>
          </div>
          {isLoading ? (
            <button
              disabled={true}
              className={`${styles.btn} ${styles.disabled}`}
            >
              <ButtonLoading />
            </button>
          ) : (
            <button className={styles.btn} onClick={this.submit}>
              LOGIN
            </button>
          )}
        </Container>
      </Layout>
    );
  }
}

export default Login;
