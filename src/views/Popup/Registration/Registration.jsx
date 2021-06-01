import React, { Component } from 'react';
import formCreate from '../components/formCreate.js';
import Layout from '../components/Layout.jsx';
import Container from '../components/Container';
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
      error: null, // TODO Maybe remove from state?
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
        await signup(data);
        this.props.history.replace('confirm');
      } catch (error) {
        return this.setState({ error });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props;
    const error = { ...this.state.error };
    const serverErrorMsg = error?.response?.data?.message;
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
                {getFieldDecorator(
                  'firstName',
                  {
                    rules: [firstNameRules],
                  },
                  serverErrorMsg,
                )(
                  <input
                    className={styles.input}
                    id="firstName"
                    type="text"
                    placeholder="please input ur first name"
                  />,
                )}
              </div>
            </div>
            <div className={styles.sole}>
              <div className={styles.row}>
                <label htmlFor="lastName" className={styles.label}>
                  LAST NAME
                </label>
                {getFieldDecorator(
                  'lastName',
                  {
                    rules: [lastNameRules],
                  },
                  serverErrorMsg,
                )(
                  <input
                    id="lastName"
                    className={styles.input}
                    type="text"
                    placeholder="please input ur last name"
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
                    placeholder="please input ur email"
                  />,
                )}
              </div>
            </div>
            <button
              type="submit"
              className={styles.btn}
              onClick={this.submit}
            >
              Submit
            </button>
          </form>
        </Container>
      </Layout>
    );
  }
}

export default Registration;
