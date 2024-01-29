import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ScrollLink } from "react-scroll";
import Button from "../Button/Button";

import "../Menu/style.scss";

const Menu = (props) => {
  return (
    <Slide direction="right" triggerOnce>
      <div className="menu">
        <h1 onClick={props.closeMenu} className="menu__item" smooth to="main">
          <Fade direction="right" delay={100}>
            Главная
          </Fade>
        </h1>
        <Fade direction="right" delay={200}>
          <h1 className="menu__item">Бренды</h1>
        </Fade>
        <Fade direction="right" delay={300}>
          <h1 className="menu__item">Контакты</h1>
        </Fade>
        <Fade direction="right" delay={400}>
          <Button className={"menu-btn"} text="Заказать звонок" />
        </Fade>
      </div>
    </Slide>
  );
};

export default Menu;
