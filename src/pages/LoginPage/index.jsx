import React from 'react';
import PageWrapper from 'containers/PageWrapper';
import LoginForm from 'containers/LoginForm';
import './styles.scss';

const LoginPage = () => (
  <PageWrapper>
    <div className="wrapper">
      <div className="login-page">
        <div className="login-page__login-form">
          <LoginForm />
        </div>
        <div className="login-page__right">
          Right
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default LoginPage;
