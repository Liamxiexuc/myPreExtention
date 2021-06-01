import React, { Component } from 'react';
import { isEmailValid } from '../../../utils/regex.js';

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
      /*       this.setState({ [name]: value }, () => {
        this.validate();
      }); */
    };
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return (InputCmp) => {
        return (
          <div>
            {React.cloneElement(InputCmp, {
              name: field,
              value: this.state[field] || '',
              onChange: this.handleChange,
            })}
            <small>{this.state.errors[field]}</small>
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
        if (!state[name]) {
          errors[name] = this.options[name].rules[0].message;
        } else {
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
