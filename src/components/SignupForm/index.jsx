import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button, Tabs, TabPane } from 'components/common';
import './styles.scss';

const SignupForm = () => {
  return (
    <div className="signup-form">
      <span className="signup-form__title signup-form__row">Регистрация</span>
      <Tabs>
        <TabPane title="Частный специалист" key="privateSpecialistTab">TabPane 1</TabPane>
        <TabPane title="Компания или ИП" key="companyTab">TabPane 2</TabPane>
      </Tabs>
    </div>
  );
};

SignupForm.propTypes = {
};

export default SignupForm;
