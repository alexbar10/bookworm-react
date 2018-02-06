import React from "react";
import Validator from "validator";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};

    if (!Validator.isEmail(data.email)) errors.invalidEmail = "Invalid email";
    if (!data.password) errors.invalidPassword = "Password can't be blank";

    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.invalidEmail}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@live.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.invalidEmail && (
            <InlineError errorMessage={errors.invalidEmail} />
          )}
        </Form.Field>
        <Form.Field error={!!errors.invalidPassword}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Make it secure"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.invalidPassword && (
            <InlineError errorMessage={errors.invalidPassword} />
          )}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
