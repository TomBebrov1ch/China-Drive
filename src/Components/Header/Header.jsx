import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "../Header/style.scss";

import logo from "../../assets/logo.svg";
import Hamburger from "hamburger-react";

const Header = (props) => {
  return (
    <>
      <header className="header-mob">
        <div className="header">
          <img src={logo} alt="logo" className="header__img" />
          <Hamburger
            toggled={props.isOpen}
            toggle={props.toggleMenu}
            color="#ed092d"
            className="header__ham"
          />
        </div>
      </header>
      <header className="header-pc">
        <div class="container">
          <img src={logo} alt="logo" class="container__logo" />
          <nav className="container__links">
            <ScrollLink class="container__links__item" to="main-pc" smooth>
              Главная
            </ScrollLink>
            <ScrollLink class="container__links__item" to="contacts-pc" smooth>
              Бренды
            </ScrollLink>
            <ScrollLink class="container__links__item" to="form_pc" smooth>
              Контакты
            </ScrollLink>
          </nav>
          <ScrollLink class="container__item" to="form_pc" smooth>
            <button className="container__item__btn">Заказать звонок</button>
          </ScrollLink>
        </div>
      </header>
    </>
  );
};

export default Header;
