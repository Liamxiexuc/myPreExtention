import React, { Component } from 'react';
import styles from './formCreate.module.css';

export default function formCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        errors: {},
      };
      this.options = {};
    }
    handleChange = (e) => {
      let { name, value } = e.target;

      this.validate({
        ...this.state,
        [name]: value,
      });
    };
    getFieldDecorator = (field, option, serverErrorMsg) => {
      this.options[field] = option;
      let errorMsg = serverErrorMsg
        ? serverErrorMsg
        : this.state.errors[field];

      if (errorMsg && errorMsg.includes(':')) {
        errorMsg = errorMsg.split(':')[2];
      }

      return (InputCmp) => {
        return (
          <div className={styles.sole}>
            {React.cloneElement(InputCmp, {
              name: field,
              value: this.state[field] || '',
              onChange: this.handleChange,
            })}
            <small className={styles.errorMsg}>{errorMsg}</small>
          </div>
        );
      };
    };
    getFieldsValue = () => {
      return { ...this.state };
    };
    getFieldValue = (field) => {
      return this.state[field];
    };
    validate = (state) => {
      const errors = {};
      for (let name in this.options) {
        const isRequired = !!this.options[name].rules[0]?.required;
        const isTyped = !!state[name];
        if (isTyped) {
          const { rules } = this.options[name];
          rules.forEach((i) => {
            // skip required validation as it has been done above
            if (i.required) return;
            // handle validator(Fn)
            if (i.validator) {
              const isValid = i.validator(state[name]);
              if (!isValid) {
                errors[name] = i.message;
              }
            }
            // Add more rules handler here
          });
        } else if (isRequired) {
          errors[name] = this.options[name].rules[0].message;
        }
      }
      this.setState({ ...state, errors });
    };
    validateFields = (callback) => {
      const state = { ...this.state };
      this.validate(state);
      const { errors } = this.state;
      if (JSON.stringify(errors) === '{}') {
        callback(undefined, state);
      } else {
        callback(errors, state);
      }
    };
    render() {
      return (
        <Cmp
          getFieldDecorator={this.getFieldDecorator}
          getFieldsValue={this.getFieldsValue}
          getFieldValue={this.getFieldValue}
          validateFields={this.validateFields}
          {...this.props}
        />
      );
    }
  };
}
