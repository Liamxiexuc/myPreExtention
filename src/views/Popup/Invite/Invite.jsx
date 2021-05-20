import React, { Component } from "react";
import formCreate from "../components/formCreate.js";
import styles from './Invite.module.css';

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@formCreate
class Invite extends Component {
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
    this.props.history.push('/afterInvite');
  };
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div className={styles.invite}>
        <h3>Invite Page - Invite other "power" users</h3>
        {getFieldDecorator("name", { rules: [nameRules] })(
          <input className={styles.input} type="email" placeholder="please input ur first email" />
        )}
        {getFieldDecorator("password", { rules: [nameRules] })(
          <input className={styles.input} type="email" placeholder="please input ur last email" />
        )}
        {getFieldDecorator("email", { rules: [passwordRules] })(
          <input className={styles.input} type="email" placeholder="please input ur email" />
        )}
        <button className={styles.btn} onClick={this.submit}>Send Invitations</button>
      </div>
    );
  }
}

export default Invite;
