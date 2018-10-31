import React, { Component } from 'react';
import LoginForm from 'components/LoginForm';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state.login, this.state.password);
  };

  render() {
    return (
      <LoginForm
        login={this.state.login}
        password={this.state.password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginFormContainer;
