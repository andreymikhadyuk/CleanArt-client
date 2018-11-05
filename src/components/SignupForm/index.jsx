import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, TabPane } from 'components/common';
import PrivateSpecialistForm from './PrivateSpecialistForm';
import './styles.scss';

const SignupForm = ({
  firstName,
  lastName,
  email,
  phone,
  handleChange,
  handlePrivateSpecialistSubmit
}) => {
  const props = {
    privateSpecialist: {
      firstName,
      lastName,
      email,
      phone,
      handleChange,
      handleSubmit: handlePrivateSpecialistSubmit,
    },
  };

  return (
    <div className="signup-form">
      <span className="signup-form__title signup-form__row">Регистрация</span>
      <Tabs>
        <TabPane title="Частный специалист" key="privateSpecialistTab">
          <PrivateSpecialistForm {...props.privateSpecialist} />
        </TabPane>
        <TabPane title="Компания или ИП" key="companyTab">TabPane 2</TabPane>
      </Tabs>
    </div>
  );
};

SignupForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handlePrivateSpecialistSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
