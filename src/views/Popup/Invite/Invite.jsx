import React, { Component } from 'react';
import formCreate from '../components/formCreate.js';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import {
  emailRules,
  emailFormatRules,
} from '../../../utils/validation.js';
import styles from './Invite.module.css';

@formCreate
class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  submit = (event) => {
    event.preventDefault();
    this.setState({ error: null });
    const { getFieldsValue, getFieldValue, validateFields } =
      this.props;
    validateFields((err, values) => {
      const data = getFieldsValue();
      const keyLength = Object.keys(data).length;
      const isEmpty = keyLength > 1 ? false : true;
      if (err || isEmpty) return;
      this.props.history.push('/afterInvite');
    });
  };
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Layout>
        <h1 className={styles.title}>INVITE NEW "POWER" USERS</h1>
        <Container style={{ backgroundColor: '#ffe610' }}>
          <div className={styles.invite}>
            <p className={styles.text}>
              SHARE THE LOVE, INVITE YOUR FRIENDS AND RECEIVE SPECIAL
              "POWER" FEATURES.
            </p>
            <p className={styles.text}>
              ENTER EMAIL ADDRESS'S BELOW TO SEND INVITATIONS TO
              PROPERTY POWER.
            </p>
            <form className={styles.form}>
              <div className={styles.sole}>
                <div className={styles.row}>
                  <label htmlFor="email" className={styles.label}>
                    EMAIL 1
                  </label>
                  {getFieldDecorator('email1', {
                    rules: [emailRules, emailFormatRules],
                  })(
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
                  <label htmlFor="email" className={styles.label}>
                    EMAIL 2
                  </label>
                  {getFieldDecorator('email2', {
                    rules: [emailFormatRules],
                  })(
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
                  <label htmlFor="email" className={styles.label}>
                    EMAIL 3
                  </label>
                  {getFieldDecorator('email3', {
                    rules: [emailFormatRules],
                  })(
                    <input
                      id="email"
                      className={styles.input}
                      type="email"
                      placeholder="please input your email"
                    />,
                  )}
                </div>
              </div>
              <button className={styles.btn} onClick={this.submit}>
                Send Invitations
              </button>
            </form>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Invite;
