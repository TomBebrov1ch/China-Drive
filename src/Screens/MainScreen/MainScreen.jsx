import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from "react-scroll";

import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import Button from "../../Components/Button/Button";

import Car from "../../assets/image-3.webp";
import CarPc from "../../assets/decoration.webp";

import "../MainScreen/style.scss";

const MainScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      {isOpen && <Menu closeMenu={() => setIsOpen(false)} />}
      <main className="main-mob">
        <div className="main-all">
          <Fade direction="up" triggerOnce>
            <h1 className="main-all__par">China Drive</h1>
          </Fade>
          <Fade direction="up" triggerOnce className="main-all__big">
            Поиск и заказ деталей это быстро и легко.
          </Fade>
          <Fade direction="up" triggerOnce className="main-all__sec">
            Поиск, бронирование и заказ комплектующих теперь стали максимально
            удобными и эффективными.
          </Fade>
          <Fade className="main__btn" direction="up" triggerOnce>
            <ScrollLink smooth to="form-mob">
              Подробнее
            </ScrollLink>
          </Fade>
        </div>
        <div className="main-all__s">
          <Fade direction="right" triggerOnce>
            <img src={Car} alt="car" className="main-all__s__car" />
          </Fade>
          <div className="main-all__s__con">
            <Fade className="main-all__s__nav" direction="left" triggerOnce>
              Ваше удобство — наш первоочередный приоритет.
            </Fade>
            <Fade className="main-all__s__second" direction="right" triggerOnce>
              Экономьте время на поиск. Наш сервис позволяет легко и быстро
              заказывать необходимые комплектующие.
            </Fade>
            <ScrollLink smooth to="form-mob">
              <Fade direction="up" triggerOnce>
                <Button className={"main__s__btn"} text="Подробнее" />
              </Fade>
            </ScrollLink>
          </div>
        </div>
      </main>
      <main className="main-pc">
        <div className="main_pc">
          <Fade direction="up" triggerOnce>
            <p className="main_pc__first">China Drive</p>
          </Fade>
          <Fade direction="up" triggerOnce>
            <h1 className="main_pc__big">
              Поиск и заказ деталей это быстро и легко.
            </h1>
          </Fade>
          <div className="main_pc__container">
            <Fade direction="up" triggerOnce>
              <p className="main_pc__container__second">
                Поиск, бронирование и заказ комплектующих теперь стали
                максимально удобными и эффективными.
              </p>
              <hr className="main_pc__container__separator" />
              <ScrollLink smooth to="contacts-pc">
                <button className="main_pc__container__btn">Подробнее</button>
              </ScrollLink>
            </Fade>
          </div>
        </div>
        <Slide direction="right" triggerOnce>
          <img src={CarPc} alt="car" className="main-pc__img" />
        </Slide>
      </main>
      <main className="main_s">
        <Fade direction="right" triggerOnce>
          <div className="main_s__nav">
            <h2 className="main_s__big">
              Ваше удобство — наш первоочередный приоритет.
            </h2>
            <hr className="main_s__separator" />
            <div className="main-s__items">
              <p className="main_s__second">
                Экономьте время на поиск. Наш сервис позволяет легко и быстро
                заказывать необходимые комплектующие.{" "}
              </p>
              <ScrollLink smooth to="form_pc">
                <button className="main_s__btn">Контакты</button>
              </ScrollLink>
            </div>
          </div>
        </Fade>
      </main>
    </>
  );
};

export default MainScreen;
