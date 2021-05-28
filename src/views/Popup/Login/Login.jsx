import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import formCreate from '../components/formCreate.js';
import styles from './Login.module.css';

const nameRules = { required: true, message: 'please input ur name' };
const passwordRules = {
  required: true,
  message: 'please input ur password',
};

@formCreate
class Login extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } =
      this.props;
    validateFields((err, values) => {
      if (err) {
        console.log('err', err); //sy-log
      } else {
        console.log('success', values); //sy-log
      }
    });

    // TODO for router demo
    this.props.history.push('/dashboard');
  };
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Layout>
        <Container style={{ backgroundColor: '#ffe610' }}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.sole}>
            <div className={styles.row}>
              <label htmlFor="lastName" className={styles.label}>
                LAST NAME
              </label>
              {getFieldDecorator('lastName', {
                rules: [nameRules],
              })(
                <input
                  id="lastName"
                  className={styles.input}
                  type="text"
                  placeholder="please input ur last name"
                />,
              )}
            </div>
            <small className={styles.msg}>error</small>
          </div>
          <div className={styles.sole}>
            <div className={styles.row}>
              <label htmlFor="email" className={styles.label}>
                EMAIL
              </label>
              {getFieldDecorator('email', { rules: [nameRules] })(
                <input
                  id="email"
                  className={styles.input}
                  type="email"
                  placeholder="please input ur email"
                />,
              )}
            </div>
            <small className={styles.msg}>error</small>
          </div>
          <button className={styles.btn} onClick={this.submit}>
            LOGIN
          </button>
        </Container>
      </Layout>
    );
  }
}

export default Login;
