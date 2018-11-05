import React, { Component } from 'react';
import SignupForm from 'components/SignupForm';

class SignupFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlePrivateSpecialistSubmit = () => {
    const { firstName, lastName, email, phone } = this.state;
    console.log(firstName, lastName, email, phone);
  };

  render() {
    const { firstName, lastName, email, phone } = this.state;

    const props = {
      firstName,
      lastName,
      email,
      phone,
      handleChange: this.handleChange,
      handlePrivateSpecialistSubmit: this.handlePrivateSpecialistSubmit,
    };

    return (
      <SignupForm {...props} />
    );
  }
}

export default SignupFormContainer;
