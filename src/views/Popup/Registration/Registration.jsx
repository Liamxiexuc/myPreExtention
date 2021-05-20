import React, { Component } from 'react';
import formCreate from '../components/formCreate.js';
import Layout from '../components/Layout.jsx';
import styles from './Registration.module.css';

const nameRules = { required: true, message: 'please input ur name' };
const passwordRules = {
  required: true,
  message: 'please input ur password',
};

@formCreate
class Registration extends Component {
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
    this.props.history.push('/confirm');
  };
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Layout>
        <div className={styles.register}>
          <h3>Waitlist Page - Registration</h3>
          {getFieldDecorator('name', { rules: [nameRules] })(
            <input
              className={styles.input}
              type="text"
              placeholder="please input ur first name"
            />,
          )}
          {getFieldDecorator('password', { rules: [nameRules] })(
            <input
              className={styles.input}
              type="text"
              placeholder="please input ur last name"
            />,
          )}
          {getFieldDecorator('email', { rules: [passwordRules] })(
            <input
              className={styles.input}
              type="email"
              placeholder="please input ur email"
            />,
          )}
          <button className={styles.btn} onClick={this.submit}>
            Submit
          </button>
        </div>
      </Layout>
    );
  }
}

export default Registration;
