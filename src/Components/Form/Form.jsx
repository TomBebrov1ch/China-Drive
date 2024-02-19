import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

import "../Form/style.scss";

import Button from "../Button/Button";
import Car from "../../assets/4pc.webp";

const Form = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [isCarListVisible, setIsCarListVisible] = useState(false);
  const carListRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carListRef.current && !carListRef.current.contains(event.target)) {
        setIsCarListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const Cars = [
    "Zeekr",
    "Changan",
    "Volkswagen",
    "NIO",
    "BMW",
    "Haval",
    "Chery",
    "Exeed",
    "JAC",
    "Geely",
  ];

  const onSubmit = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,

        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          props.setShowPopup(true);
          reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
    setName("");
    setPhone("");
    setVin("");
    setModel("");
    setYear("");
    setBrand("");
  };

  const handleInputClick = () => {
    setIsCarListVisible(true);
  };

  const handleCarSelect = (car, event) => {
    console.log("Выбран автомобиль:", car);
    setSelectedCar(car);
    setBrand(car);
    setIsCarListVisible(false);
  };

  return (
    <>
      <div className="form">
        <section className="form-mob" id="form-mob">
          <div className="form">
            <Fade direction="left" triggerOnce></Fade>
            <Fade direction="right" triggerOnce>
              <h2 className="form__main">
                Свяжитесь с <span className="form__main-span">нами</span>
              </h2>
            </Fade>
            <Fade direction="left" triggerOnce>
              <p className="form__sec">
                Нужна помощь с заказом деталей? Мы готовы помочь! Обращайтесь к
                нам для консультации и оформления заказа.{" "}
              </p>
            </Fade>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Fade className="mr" direction="right" triggerOnce>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="form__input"
                  style={{ outline: "none" }}
                  required={true}
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Ваш телефон"
                  className="form__input"
                  style={{ outline: "none" }}
                  required={true}
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                  name="phone"
                />
                <input
                  type="text"
                  placeholder="VIN автомобиля"
                  className="form__input"
                  style={{ outline: "none" }}
                  required={true}
                  onChange={(event) => setVin(event.target.value)}
                  value={vin}
                  name="vin"
                />
                <input
                  type="text"
                  placeholder="Год автомобиля"
                  className="form__input"
                  style={{ outline: "none" }}
                  required={true}
                  onChange={(event) => setYear(event.target.value)}
                  value={year}
                  name="year"
                />
                <div className="mr__item">
                  <input
                    type="text"
                    placeholder="Марка автомобиля"
                    className="form__input"
                    style={{ outline: "none" }}
                    required={true}
                    onFocus={handleInputClick}
                    value={brand}
                    onChange={(event) => setBrand(event.target.value)}
                    name="brand"
                  />
                  {isCarListVisible && (
                    <div ref={carListRef} className="form__input__list">
                      {Cars.map((car) => (
                        <div
                          key={car}
                          onMouseDown={() => handleCarSelect(car)}
                          className="form__input__list__item"
                        >
                          {car}
                        </div>
                      ))}
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Модель автомобиля"
                    className="form__input"
                    style={{ outline: "none" }}
                    required={true}
                    onChange={(event) => setModel(event.target.value)}
                    value={model}
                    name="model"
                  />
                </div>
                <Fade direction="left" triggerOnce>
                  <Button className={"сontacts-btn"} text={"Заказать звонок"} />
                </Fade>
              </Fade>
            </form>
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
                Нужна помощь с заказом деталей? Мы готовы помочь! Обращайтесь к
                нам для консультации и оформления заказа.{" "}
              </p>
            </Fade>
            <form className="form-pc__inputs" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-pc__inputs__f">
                <Fade direction="right" triggerOnce>
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="form-pc__inputs__input"
                      style={{ outline: "none" }}
                      required={true}
                      onChange={(event) => setName(event.target.value)}
                      value={name}
                      name="name"
                    />
                  </div>
                </Fade>
                <Fade direction="right" delay={100} triggerOnce>
                  <div>
                    <input
                      type="text"
                      placeholder="Ваш телефон"
                      className="form-pc__inputs__input"
                      style={{ outline: "none" }}
                      required={true}
                      onChange={(event) => setPhone(event.target.value)}
                      value={phone}
                      name="phone"
                    />
                  </div>
                </Fade>
              </div>
              <div className="form-pc__inputs__f">
                <Fade direction="right" delay={200} triggerOnce>
                  <input
                    type="text"
                    placeholder="VIN автомобиля"
                    className="form-pc__inputs__input-s"
                    style={{ outline: "none" }}
                    required={true}
                    onChange={(event) => setVin(event.target.value)}
                    value={vin}
                    name="vin"
                  />
                </Fade>
                <Fade direction="right" delay={300} triggerOnce>
                  <input
                    type="text"
                    placeholder="Год автомобиля"
                    className="form-pc__inputs__input-s"
                    style={{ outline: "none" }}
                    required={true}
                    onChange={(event) => setYear(event.target.value)}
                    value={year}
                    name="year"
                  />
                </Fade>
              </div>
              <Fade direction="right" delay={200} triggerOnce>
                <div className="form-pc__inputs__t">
                  <input
                    type="text"
                    placeholder="Марка автомобиля"
                    className="form-pc__inputs__t__s"
                    style={{ outline: "none" }}
                    required={true}
                    onFocus={handleInputClick}
                    value={brand}
                    onChange={(event) => setBrand(event.target.value)}
                    name="brand"
                  />
                  {isCarListVisible && (
                    <div
                      ref={carListRef}
                      className="car-list"
                      style={{ display: isCarListVisible ? "block" : "none" }}
                    >
                      {Cars.map((car) => (
                        <div
                          key={car}
                          onClick={() => handleCarSelect(car)}
                          className="car-list__item"
                        >
                          {car}
                        </div>
                      ))}
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Модель автомобиля"
                    className="form-pc__inputs__t__s"
                    style={{ outline: "none" }}
                    required={true}
                    onChange={(event) => setModel(event.target.value)}
                    value={model}
                    name="model"
                  />
                </div>
              </Fade>
              <button type="submit" className="container__item__btn">
                Заказать звонок
              </button>
            </form>
          </div>
          <Fade direction="right" triggerOnce>
            <img src={Car} alt="car" className="form_pc__img" />
          </Fade>
        </section>
      </div>
    </>
  );
};

export default Form;
