import React from "react";

import "../Form/style.scss";
import TextMain from "../TextMain/TextMain";
import Button from "../Button/Button";
import Car from "../../assets/4pc.webp";

const Form = () => {
  return (
    <>
      <section className="form-mob">
        <div className="form">
          <TextMain
            classNameC={"main"}
            classNameP={"main__par"}
            textFirst={"Контакты"}
          />
          <h2 className="form__main">
            Свяжитесь с <span className="form__main-span">нами</span>
          </h2>
          <p className="form__sec">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
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
          <Button className={"сontacts-btn"} text={"Заказать звонок"} />
        </div>
      </section>
      <section className="form_pc">
        <div className="form-pc">
          <p className="form-pc__first">Контакты</p>
          <h2 className="form-pc__main">
            Свяжитесь с <span className="form-pc__main-span">нами</span>
          </h2>
          <p className="form-pc__sec">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
          <div className="form-pc__inputs">
            <div className="form-pc__inputs__f">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="form-pc__inputs__input"
                />
                <hr className="form-pc__inputs__separator" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Ваш телефон"
                  className="form-pc__inputs__input"
                />
                <hr className="form-pc__inputs__separator" />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="VIN автомобиля"
                className="form-pc__inputs__input-s"
              />
              <hr className="form-pc__inputs__separator-s" />
            </div>
            <button className="container__item__btn">Заказать звонок</button>
          </div>
        </div>
        <img src={Car} alt="car" className="form_pc__img" />
      </section>
    </>
  );
};

export default Form;
