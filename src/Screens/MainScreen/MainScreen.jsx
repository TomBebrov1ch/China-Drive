import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from "react-scroll";

import "../MainScreen/style.scss";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import Button from "../../Components/Button/Button";

import Car from "../../assets/image-3.webp";
import CarPc from "../../assets/decoration.webp";

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
      <section className="main-mob">
        <div className="main-all">
          <Fade direction="up" triggerOnce>
            <p className="main-all__par">China Drive</p>
          </Fade>
          <Fade direction="up" triggerOnce className="main-all__big">
            Search, book, and order details easily
          </Fade>
          <Fade direction="up" triggerOnce className="main-all__sec">
            Lorem ipsum dolor sit amet consectetur. Sit porttitor vel magna
            vulputate.
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
              Тут должен быть большой заголовок
            </Fade>
            <Fade className="main-all__s__second" direction="right" triggerOnce>
              Lorem ipsum dolor sit amet consectetur. Etiam at leo egestas et
              amet tincidunt. Justo fringilla blandit nibh rhoncus.
            </Fade>
            <ScrollLink smooth to="form-mob">
              <Fade direction="up" triggerOnce>
                <Button className={"main__s__btn"} text="Подробнее" />
              </Fade>
            </ScrollLink>
          </div>
        </div>
      </section>
      <section className="main-pc">
        <div className="main_pc">
          <Fade direction="up" triggerOnce>
            <p className="main_pc__first">China Drive</p>
          </Fade>
          <Fade direction="up" triggerOnce>
            <h2 className="main_pc__big">
              Search, book, and order details easily
            </h2>
          </Fade>
          <div className="main_pc__container">
            <Fade direction="up" triggerOnce>
              <p className="main_pc__container__second">
                Lorem ipsum dolor sit amet consectetur. Sit porttitor vel magna
                vulputate.
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
      </section>
      <div className="main_s">
        <Fade direction="right" triggerOnce>
          <div className="main_s__nav">
            <h2 className="main_s__big">Тут должен быть большой заголовок</h2>
            <hr className="main_s__separator" />
            <div className="main-s__items">
              <p className="main_s__second">
                Lorem ipsum dolor sit amet consectetur. Etiam at leo egestas et
                amet tincidunt. Justo fringilla blandit nibh rhoncus.{" "}
              </p>
              <ScrollLink smooth to="form_pc">
                <button className="main_s__btn">Контакты</button>
              </ScrollLink>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default MainScreen;
