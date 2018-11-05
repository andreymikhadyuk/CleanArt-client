import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'components/common';
import './styles.scss';

const SignupForm = () => {
  return (
    <div className="signup-form">
      <span className="signup-form__title signup-form__row">Регистрация</span>
    </div>
  );
};

SignupForm.propTypes = {
};

export default SignupForm;
