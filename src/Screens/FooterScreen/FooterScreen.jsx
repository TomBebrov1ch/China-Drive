import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "../FooterScreen/style.scss";
import logo from "../../assets/china.svg";
import logoPc from "../../assets/china.svg";
import Button from "../../Components/Button/Button";
import China from "../../assets/image-5.webp";

import Spark from "../../assets/spark_logo.svg";

const FooterScreen = () => {
  return (
    <>
      <footer className="footer-mob">
        <div className="footer">
          <ScrollLink smooth to="header">
            <img src={logo} alt="logo" className="footer__logo" />
          </ScrollLink>
          <ScrollLink className="footer__text" smooth to="header">
            Главная
          </ScrollLink>
          <ScrollLink className="footer__text" smooth to={"contacts"}>
            Бренды
          </ScrollLink>
          <ScrollLink className="footer__text" smooth to={"form"}>
            Контакты
          </ScrollLink>
          <ScrollLink smooth to={"form"}>
            <Button className={"сontacts-btn"} text={"Заказать звонок"} />
          </ScrollLink>
          <a href="https://sparkstudio.kz/home">
            <img src={Spark} alt="logo" className="spark" />
          </a>
        </div>
      </footer>
      <footer className="footer_pc">
        <div className="footer-pc">
          <ScrollLink smooth to="header-pc">
            <img src={logoPc} alt="logo" className="footer-pc__logo" />
          </ScrollLink>
          <div className="footer-pc__items">
            <ScrollLink
              className="footer-pc__items__text"
              smooth
              to="header-pc"
            >
              Главная
            </ScrollLink>
            <ScrollLink
              className="footer-pc__items__text"
              smooth
              to={"contacts__pc"}
            >
              Бренды
            </ScrollLink>
            <ScrollLink className="footer-pc__items__text" smooth to={"form"}>
              Контакты
            </ScrollLink>
          </div>
          <ScrollLink smooth to="form-pc">
            <button className="container__item__btn">Заказать звонок</button>
          </ScrollLink>
        </div>
        <a href="https://sparkstudio.kz/home">
          <img src={Spark} alt="logo" className="spark-pc" />
        </a>
        <img src={China} alt="china_text" className="footer_pc__img" />
      </footer>
    </>
  );
};

export default FooterScreen;
