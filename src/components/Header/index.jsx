import React from 'react';
import './styles.scss';
import { Button, Link } from 'components/common';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <div className="header__logo">
        CleanArt
      </div>
      <Link text="Войти" url="/login" className="header__login" />
      <div className="header__registration">
        <Button text="Зарегистрироваться" />
      </div>
    </div>
  </header>
);

export default Header;
