import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

import "../Form/style.scss";
import TextMain from "../TextMain/TextMain";
import Button from "../Button/Button";
import Car from "../../assets/4pc.webp";

const Form = () => {



  return (
    <>
      <section className="form-mob">
        <div className="form">
          <Fade direction="left" triggerOnce>
            <TextMain
              classNameC={"main"}
              classNameP={"main__par"}
              textFirst={"Контакты"}
            />
          </Fade>

          <Fade direction="right" triggerOnce>
            <h2 className="form__main">
              Свяжитесь с <span className="form__main-span">нами</span>
            </h2>
          </Fade>
          <Fade direction="left" triggerOnce>
            <p className="form__sec">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna{" "}
            </p>
          </Fade>
          <Fade direction="right" triggerOnce>
            <input type="text" placeholder="Ваше имя" className="form__input" />
            <hr className="form__separator" />
            <input
              type="text"
              placeholder="Ваш телефон"
              className="form__input"
            />
            <hr className="form__separator" />
            <input
              type="text"
              placeholder="VIN автомобиля"
              className="form__input"
            />
            <hr className="form__separator" />
          </Fade>
          <Fade direction="left" triggerOnce>
            <Button className={"сontacts-btn"} text={"Заказать звонок"} />
          </Fade>
        </div>
      </section>
      <section className="form_pc">
        <div className="form-pc">
          <Fade direction="right" triggerOnce>
            <p className="form-pc__first">Контакты</p>
          </Fade>
          <Fade direction="right" delay={100} triggerOnce>
            <h2 className="form-pc__main">
              Свяжитесь с <span className="form-pc__main-span">нами</span>
            </h2>
          </Fade>
          <Fade direction="right" delay={200} triggerOnce>
            <p className="form-pc__sec">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna{" "}
            </p>
          </Fade>
          <div className="form-pc__inputs">
            <div className="form-pc__inputs__f">
              <Fade direction="right">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="form-pc__inputs__input"
                  />
                  <hr className="form-pc__inputs__separator" />
                </div>
              </Fade>
              <Fade direction="right" delay={100} triggerOnce>
                <div>
                  <input
                    type="text"
                    placeholder="Ваш телефон"
                    className="form-pc__inputs__input"
                  />
                  <hr className="form-pc__inputs__separator" />
                </div>
              </Fade>
            </div>
            <Fade direction="right" delay={200} triggerOnce>
              <div>
                <input
                  type="text"
                  placeholder="VIN автомобиля"
                  className="form-pc__inputs__input-s"
                />
                <hr className="form-pc__inputs__separator-s" />
              </div>
            </Fade>
            <button className="container__item__btn">Заказать звонок</button>
          </div>
        </div>
        <img src={Car} alt="car" className="form_pc__img" />
      </section>
    </>
  );
};

export default Form;
