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
      <section className="footer-mob">
        <div className="footer">
          <ScrollLink smooth to="header">
            <img src={logo} alt="" className="footer__logo" />
          </ScrollLink>
          <ScrollLink smooth to="header">
            <p className="footer__text">Главная</p>
          </ScrollLink>
          <ScrollLink smooth to={"contacts"}>
            <p className="footer__text">Бренды</p>
          </ScrollLink>
          <ScrollLink smooth to={"form"}>
            <p className="footer__text">Контакты</p>
          </ScrollLink>
          <ScrollLink smooth to={"form"}>
            <Button className={"сontacts-btn"} text={"Заказать звонок"} />
          </ScrollLink>
          <a href="https://sparkstudio.kz/home">
            <img src={Spark} alt="logo" className="spark" />
          </a>
        </div>
      </section>
      <section className="footer_pc">
        <div className="footer-pc">
          <ScrollLink smooth to="header-pc">
            <img src={logoPc} alt="" className="footer-pc__logo" />
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
              to={"contacts"}
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
        <img src={China} alt="" className="footer_pc__img" />
      </section>
    </>
  );
};

export default FooterScreen;
