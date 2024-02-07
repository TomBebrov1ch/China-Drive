import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from "react-scroll";

import "../Menu/style.scss";

const Menu = (props) => {
  return (
    <Slide className="menu" direction="right" triggerOnce>
      <nav className="menu">
        <Fade className="menu__content" direction="right">
          <ScrollLink onClick={props.closeMenu} smooth to="main-all">
            Главная
          </ScrollLink>
        </Fade>
        <Fade className="menu__content" direction="right" delay={100}>
          <ScrollLink onClick={props.closeMenu} smooth to="contacts-mob">
            Бренды
          </ScrollLink>
        </Fade>
        <Fade className="menu__content" direction="right" delay={200}>
          <ScrollLink onClick={props.closeMenu} smooth to="form-mob">
            Контакты
          </ScrollLink>
        </Fade>
        <Fade className="menu__content__btn" direction="right" delay={300}>
          <ScrollLink
            onClick={props.closeMenu}
            className="menu__item"
            smooth
            to="form-mob"
          >
            Заказать звонок
          </ScrollLink>
        </Fade>
      </nav>
    </Slide>
  );
};

export default Menu;
