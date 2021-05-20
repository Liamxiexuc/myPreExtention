import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import formCreate from "../components/formCreate.js";
import styles from './Login.module.css';

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@formCreate
class Login extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err); //sy-log
      } else {
        console.log("success", values); //sy-log
      }
    });

    // TODO for router demo
    this.props.history.push('/dashboard');
  };
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div className={styles.login}>
        <h3>Login Page</h3>
        {getFieldDecorator("name", { rules: [nameRules] })(
          <input className={styles.input} type="text" placeholder="please input ur name" />
        )}
        {getFieldDecorator("password", { rules: [passwordRules] })(
          <input className={styles.input} type="password" placeholder="please input ur password" />
        )}
        <button className={styles.btn} onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default Login;
