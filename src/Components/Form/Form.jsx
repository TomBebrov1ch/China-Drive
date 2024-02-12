import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import axios from "axios";

import "../Form/style.scss";

import Button from "../Button/Button";
import Car from "../../assets/4pc.webp";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vin, setVin] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
          reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
    setName("");
    setPhone("");
    setVin("");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=20"
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        setError("Could not fetch products");
        console.error("There was an error!", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            <form>
              <Fade direction="right" triggerOnce>
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
              </Fade>
            </form>
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
                Нужна помощь с заказом деталей? Мы готовы помочь! Обращайтесь к
                нам для консультации и оформления заказа.{" "}
              </p>
            </Fade>
            <form className="form-pc__inputs">
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
              <Fade direction="right" delay={200} triggerOnce>
                <div>
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
      </form>
    </>
  );
};

export default Form;
