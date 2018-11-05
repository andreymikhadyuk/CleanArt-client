import React, { Component } from 'react';
import SignupForm from 'components/SignupForm';

class SignupFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
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

  handleCompanySubmit = () => {
    const { companyName, email, phone } = this.state;
    console.log(companyName, email, phone);
  };

  render() {
    const { firstName, lastName, companyName, email, phone } = this.state;

    const props = {
      firstName,
      lastName,
      companyName,
      email,
      phone,
      handleChange: this.handleChange,
      handlePrivateSpecialistSubmit: this.handlePrivateSpecialistSubmit,
      handleCompanySubmit: this.handleCompanySubmit,
    };

    return (
      <SignupForm {...props} />
    );
  }
}

export default SignupFormContainer;
