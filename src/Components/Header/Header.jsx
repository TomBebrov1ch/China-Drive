import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "../Header/style.scss";

import logo from "../../assets/logo.svg";
import Hamburger from "hamburger-react";

import Button from "../Button/Button";

const Header = (props) => {
  return (
    <>
      <section className="header-mob">
        <div className="header">
          <img src={logo} alt="image" className="header__img" />
          <Hamburger
            toggled={props.isOpen}
            toggle={props.toggleMenu}
            color="#ed092d"
            className="header__ham"
          />
        </div>
      </section>
      <section className="header-pc">
        <div class="container">
          <img src={logo} alt="image" class="container__logo" />
          <nav className="container__links">
            <ScrollLink class="container__links__item">Главная</ScrollLink>
            <ScrollLink class="container__links__item">Бренды</ScrollLink>
            <ScrollLink class="container__links__item">Контакты</ScrollLink>
          </nav>
          <ScrollLink class="container__item">
            <button className="container__item__btn">Заказать звонок</button>
          </ScrollLink>
        </div>
      </section>
    </>
  );
};

export default Header;
