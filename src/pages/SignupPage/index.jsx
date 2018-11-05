import React from 'react';
import PageWrapper from 'containers/PageWrapper';
import SignupForm from 'containers/SignupForm';
import { Button } from 'components/common';
import './styles.scss';

const SignupPage = () => (
  <PageWrapper>
    <div className="wrapper">
      <div className="signup-page">
        <div className="signup-page__left">
          <div className="signup-page__info">
            <span className="signup-page__info__title">
              Регистрация исполнителя
            </span>
          </div>
        </div>
        <div className="signup-page__right">
          <div className="signup-page__signup-form">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default SignupPage;
