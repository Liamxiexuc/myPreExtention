import React, { Component } from 'react';
import formCreate from '../components/formCreate.js';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
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
      <Layout btn="login">
        <Container title="YOUR NEXT POWER MOVE">
          <p className={styles.text}>
            AS WE ARE STILL TESTING AND IMPROVING THINGS, WE ARE ONLY
            ALLOWING A LIMITED NUMBER OF "POWER" USERS TO ACCESS OUR
            SOFTWARE.
          </p>
          <p className={styles.text}>
            PLEASE BE PATIENT - WE WILL BE IN TOUCH VERY SOON.
          </p>
          <p className={styles.text}>WE PROMISE.</p>
          <form className={styles.form}>
            <div className={styles.sole}>
              <div className={styles.row}>
                <label htmlFor="firstName" className={styles.label}>
                  FIRST NAME
                </label>
                {getFieldDecorator('firstName', {
                  rules: [nameRules],
                })(
                  <input
                    className={styles.input}
                    id="firstName"
                    type="text"
                    placeholder="please input ur first name"
                  />,
                )}
              </div>
              <small className={styles.msg}>error</small>
            </div>
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
              Submit
            </button>
          </form>
        </Container>
      </Layout>
    );
  }
}

export default Registration;
