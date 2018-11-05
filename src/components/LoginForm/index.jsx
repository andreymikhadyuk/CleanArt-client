import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'components/common';
import './styles.scss';

const LoginForm = ({ login, password, handleChange, handleSubmit }) => {
  const props = {
    login: {
      name: 'login',
      placeholder: 'Email или телефон',
      value: login,
      onChange: handleChange,
      className: 'login-form__row',
    },
    password: {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      value: password,
      onChange: handleChange,
      className: 'login-form__row',
    },
    submitButton: {
      text: 'Войти',
      className: 'login-form__row',
      emphasize: true,
      onClick: handleSubmit,
    },
  };

  return (
    <div className="login-form">
      <span className="login-form__title login-form__row">Войти</span>
      <TextInput {...props.login} />
      <TextInput {...props.password} />
      <Button {...props.submitButton} />
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
