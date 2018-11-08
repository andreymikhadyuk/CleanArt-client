import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'components/common';
import './styles.scss';

const CompanyForm = ({ companyName, email, phone, handleChange, handleSubmit }) => {
  const props = {
    companyName: {
      name: 'companyName',
      placeholder: 'Название компании',
      value: companyName,
      onChange: handleChange,
      className: 'company-form__row',
    },
    email: {
      name: 'email',
      placeholder: 'Электронная почта',
      value: email,
      onChange: handleChange,
      className: 'company-form__row',
    },
    phone: {
      type: 'tel',
      name: 'phone',
      placeholder: 'Телефон',
      value: phone,
      onChange: handleChange,
      className: 'company-form__row',
    },
    submitButton: {
      text: 'Зарегистрировать компанию',
      className: 'company-form__row',
      emphasize: true,
      onClick: handleSubmit,
    },
  };

  return (
    <div className="company-form">
      <TextInput {...props.companyName} />
      <TextInput {...props.email} />
      <TextInput {...props.phone} />
      <Button {...props.submitButton} />
    </div>
  );
};

CompanyForm.propTypes = {
  companyName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CompanyForm;
