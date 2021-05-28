import React, { Component } from 'react';
import formCreate from '../components/formCreate.js';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import styles from './Invite.module.css';

const nameRules = { required: true, message: 'please input ur name' };
const passwordRules = {
  required: true,
  message: 'please input ur password',
};

@formCreate
class Invite extends Component {
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
    this.props.history.push('/afterInvite');
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
              <div className={styles.sole}>
                <div className={styles.row}>
                  <label htmlFor="email" className={styles.label}>
                    EMAIL 2
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
              <div className={styles.sole}>
                <div className={styles.row}>
                  <label htmlFor="email" className={styles.label}>
                    EMAIL 3
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
