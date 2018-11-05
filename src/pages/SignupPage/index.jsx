import React from 'react';
import PageWrapper from 'containers/PageWrapper';
import SignupForm from 'containers/SignupForm';
import { IconSection } from 'components/common';
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
            <span className="signup-page__info__subtitle">
              После регистрации вы сможете получать задания и зарабатывать на сервисе
            </span>
            <div className="signup-page__info__icon-section">
              <IconSection
                icon="briefcase"
                title="Большое количество клининговых услуг"
                color={IconSection.COLORS.ORANGE}
              />
            </div>
            <div className="signup-page__info__icon-section">
              <IconSection
                icon="calendar-alt"
                title="Работайте в удобное для вас время"
                color={IconSection.COLORS.BLUE}
              />
            </div>
            <div className="signup-page__info__icon-section">
              <IconSection
                icon="money-bill-alt"
                title="Зарабатывайте достойно"
                color={IconSection.COLORS.GREEN}
              />
            </div>
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
