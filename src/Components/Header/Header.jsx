import React from "react";

import "../Header/style.scss";

import logo from "../../assets/logo.svg";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";

const Header = (props) => {
  return (
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
  );
};

export default Header;
