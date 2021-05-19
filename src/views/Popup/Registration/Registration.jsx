import React, { Component } from "react";
import formCreate from "../components/formCreate.js";
import styles from './Registration.module.css';

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@formCreate
class Registration extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err); //sy-log
      } else {
        console.log("success", values); //sy-log
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div className={styles.register}>
        <h3>MyFormPage</h3>
        {getFieldDecorator("name", { rules: [nameRules] })(
          <input className={styles.input} type="text" placeholder="please input ur name" />
        )}
        {getFieldDecorator("password", { rules: [passwordRules] })(
          <input className={styles.input} type="password" placeholder="please input ur password" />
        )}
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default Registration;
