import React from 'react';
import PageWrapper from 'containers/PageWrapper';
import LoginForm from 'containers/LoginForm';
import { Button } from 'components/common';
import './styles.scss';

const LoginPage = () => (
  <PageWrapper>
    <div className="wrapper">
      <div className="login-page">
        <div className="login-page__left">
          <div className="login-page__login-form">
            <LoginForm />
          </div>
        </div>
        <div className="login-page__right">
          <div className="login-page__not-registered">
            <span className="login-page__not-registered__title">
              Нет аккаунта?<br />
              Присоединяйтесь к нам!
            </span>
            <span className="login-page__not-registered__subtitle">
              После регистрации у вас будет возможность как выполнять задания, так и заказывать клининговые услуги.
            </span>
            <Button
              text="Зарегистрироваться"
              url="/"
              className="login-page__not-registered__registration"
            />
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default LoginPage;
