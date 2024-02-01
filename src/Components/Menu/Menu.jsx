import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Button/Button";

import "../Menu/style.scss";

const Menu = (props) => {
  return (
    <Slide direction="right" triggerOnce>
      <div className="menu">
        <ScrollLink
          smooth
          to={"main"}
          onClick={props.closeMenu}
          className="menu__item"
        >
          <Fade direction="right" delay={100}>
            Главная
          </Fade>
        </ScrollLink>
        <ScrollLink
          smooth
          to={"contacts"}
          onClick={props.closeMenu}
          className="menu__item"
        >
          <Fade direction="right" delay={200}>
            Бренды
          </Fade>
        </ScrollLink>
        <ScrollLink
          smooth
          to={"form"}
          onClick={props.closeMenu}
          className="menu__item"
        >
          <Fade direction="right" delay={300}>
            Контакты
          </Fade>
        </ScrollLink>
        <ScrollLink smooth to={"form"} onClick={props.closeMenu}>
          <Fade direction="right" delay={400}>
            <Button className={"menu-btn"} text="Заказать звонок" />
          </Fade>
        </ScrollLink>
      </div>
    </Slide>
  );
};

export default Menu;
