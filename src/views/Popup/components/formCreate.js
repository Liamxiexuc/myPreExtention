import React, { Component } from 'react';
import { isEmailValid } from '../../../utils/regex.js';

export default function formCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }
    handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({ [name]: value });
    };
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return (InputCmp) => {
        return React.cloneElement(InputCmp, {
          name: field,
          value: this.state[field] || '',
          onChange: this.handleChange,
        });
      };
    };
    getFieldsValue = () => {
      return { ...this.state };
    };
    getFieldValue = (field) => {
      return this.state[field];
    };
    validateFields = (callback) => {
      const errors = {};
      const state = { ...this.state };
      for (let name in this.options) {
        console.log(this.options);
        console.log(name);
        if (state[name] === undefined) {
          errors[name] = 'error';
        }
        switch (name) {
          case 'name':
            const error = !isEmailValid(state[name]);
            console.log(error);
            break;

          default:
            break;
        }
      }
      if (JSON.stringify(errors) === '{}') {
        callback(undefined, state);
      } else {
        callback(errors, state);
      }
    };
    render() {
      return (
        <div className="border">
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
            {...this.props}
          />
        </div>
      );
    }
  };
}
