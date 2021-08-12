/* global chrome */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formCreate from '../components/formCreate.js';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
import ButtonLoading from '../components/ButtonLoading';
import { signup } from '../../../services/auth.js';
import {
  emailRules,
  emailFormatRules,
  firstNameRules,
  lastNameRules,
} from '../../../utils/validation.js';
import styles from './Registration.module.css';

@formCreate
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
    };
  }
  submit = async (event) => {
    event.preventDefault();
    this.setState({ error: null });
    const { getFieldsValue, validateFields } = this.props;
    validateFields(async (err, values) => {
      const data = getFieldsValue();
      const keyLength = Object.keys(data).length;
      const isEmpty = keyLength > 1 ? false : true;
      if (err || isEmpty) return;
      try {
        this.setState({ isLoading: true });
        await signup(data);
        this.setState({ isLoading: false });
        this.props.history.replace('confirm');
      } catch (error) {
        return this.setState({ error, isLoading: false });
      }
    });
  };
  handleClickTerms = () => {
    chrome.tabs.create({
      url: 'https://www.propertypowerplugin.com.au/terms',
    });
  };
  handleClickPrivacy = () => {
    chrome.tabs.create({
      url: 'https://www.propertypowerplugin.com.au/privacy',
    });
  };
  render() {
    const { getFieldDecorator } = this.props;
    const { isLoading } = this.state;
    const error = { ...this.state.error };
    const serverErrorMsg = error?.response?.data?.message;
    return (
      <Layout>
        <Container title="YOUR NEXT POWER MOVE">
          <p className={styles.text}>
            AS WE ARE STILL TESTING AND IMPROVING THINGS, WE ARE ONLY
            ALLOWING A LIMITED NUMBER OF "POWER" USERS TO ACCESS OUR
            SOFTWARE.
          </p>
          <p className={styles.text}>
            PLEASE BE PATIENT - WE WILL BE IN TOUCH VERY SOON.
          </p>
          <form className={styles.form}>
            <div className={styles.sole}>
              <div className={styles.row}>
                <label htmlFor="firstName" className={styles.label}>
                  FIRST NAME
                </label>
                {getFieldDecorator('firstName', {
                  rules: [firstNameRules],
                })(
                  <input
                    className={styles.input}
                    id="firstName"
                    type="text"
                    placeholder="please input your first name"
                  />,
                )}
              </div>
            </div>
            <div className={styles.sole}>
              <div className={styles.row}>
                <label htmlFor="lastName" className={styles.label}>
                  LAST NAME
                </label>
                {getFieldDecorator('lastName', {
                  rules: [lastNameRules],
                })(
                  <input
                    id="lastName"
                    className={styles.input}
                    type="text"
                    placeholder="please input your last name"
                  />,
                )}
              </div>
            </div>
            <div className={styles.sole}>
              <div className={styles.row}>
                <label htmlFor="email" className={styles.label}>
                  EMAIL
                </label>
                {getFieldDecorator(
                  'email',
                  { rules: [emailRules, emailFormatRules] },
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
            <div className={styles.msg}>
              <small>
                By submitting this form, you agree to our{' '}
                <Link
                  className={styles.link}
                  onClick={this.handleClickTerms}
                  to="#"
                >
                  terms
                </Link>{' '}
                and{' '}
                <Link
                  className={styles.link}
                  onClick={this.handleClickPrivacy}
                  to="#"
                >
                  privacy policy
                </Link>{' '}
                .
              </small>
            </div>
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
                onClick={this.submit}
              >
                JOIN WAITLIST
              </button>
            )}
          </form>
        </Container>
      </Layout>
    );
  }
}

export default Registration;
