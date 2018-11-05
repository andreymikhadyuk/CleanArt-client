import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'components/common';
import './styles.scss';

const PrivateSpecialistForm = ({ firstName, lastName, email, phone, handleChange, handleSubmit }) => {
  const props = {
    firstName: {
      name: 'firstName',
      placeholder: 'Имя',
      value: firstName,
      onChange: handleChange,
      className: 'private-specialist-form__row',
    },
    lastName: {
      name: 'lastName',
      placeholder: 'Фамилия',
      value: lastName,
      onChange: handleChange,
      className: 'private-specialist-form__row',
    },
    email: {
      name: 'email',
      placeholder: 'Электронная почта',
      value: email,
      onChange: handleChange,
      className: 'private-specialist-form__row',
    },
    phone: {
      name: 'phone',
      placeholder: 'Телефон',
      value: phone,
      onChange: handleChange,
      className: 'private-specialist-form__row',
    },
    submitButton: {
      text: 'Зарегистрироваться',
      className: 'private-specialist-form__row',
      emphasize: true,
      onClick: handleSubmit,
    },
  };

  return (
    <div className="private-specialist-form">
      <TextInput {...props.firstName} />
      <TextInput {...props.lastName} />
      <TextInput {...props.email} />
      <TextInput {...props.phone} />
      <Button {...props.submitButton} />
    </div>
  );
};

PrivateSpecialistForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PrivateSpecialistForm;
