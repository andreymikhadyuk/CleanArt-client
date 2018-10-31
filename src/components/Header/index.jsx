import React from 'react';
import { Button, Link } from 'components/common';
import './styles.scss';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <div className="header__logo">
        CleanArt
      </div>
      <Link text="Войти" url="/login" className="header__login" />
      <div className="header__registration">
        <Button text="Зарегистрироваться" small />
      </div>
    </div>
  </header>
);

export default Header;
