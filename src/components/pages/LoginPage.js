import React from "react";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  state = {};
  submit = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
