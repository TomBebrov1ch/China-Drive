import React, { useState, useEffect } from "react";
import "../MainScreen/style.scss";

import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import TextMain from "../../Components/TextMain/TextMain";
import { Link as ScrollLink } from "react-scroll";

import Car from '../../assets/image-3.webp'
import Button from "../../Components/Button/Button";
import CarPc from '../../assets/decoration.webp'

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
          <TextMain
            classNameC={'main'}
            classNameP={'main__par'}
            textFirst={'China Drive'}
            classNameN={'main__nav'}
            textBig={'Search, book, and order details easily'}
            classNameS={'main__second'}
            textSecond={'Lorem ipsum dolor sit amet consectetur. Sit porttitor vel magna vulputate.'} />
          <ScrollLink smooth to="main__car">
            <Button className={"main__btn"} text={'Подробнее'} />
          </ScrollLink>
        </div>

        <div className="main-second">
          <img src={Car} alt="car" className="main__car" />

          <div className='main__s'>
            <nav className='main__s__nav'>
              Тут должен быть большой заголовок
            </nav>
            <p className='main__s__second'>
              Lorem ipsum dolor sit amet consectetur. Etiam at leo egestas et amet tincidunt. Justo fringilla blandit nibh rhoncus.
            </p>
            <ScrollLink smooth to={'form'}>
              <Button className={"main__s__btn"} text={'Контакты'} />
            </ScrollLink>
          </div>
        </div>
      </section>
      <section className="main-pc">
        <div className="main_pc">
          <p className="main_pc__first">China Drive</p>
          <nav className="main_pc__big">Search, book, and order details easily</nav>
          <nav className="main_pc__container">
            <p className="main_pc__container__second">Lorem ipsum dolor sit amet consectetur. Sit porttitor vel magna vulputate.</p>
            <hr className="main_pc__container__separator" />
            <button className="main_pc__container__btn">Подробнее</button>
          </nav>
        </div>
        <img src={CarPc} alt="car" className="main-pc__img" />
      </section>
      <div className="main_s">
        <nav className="main_s__nav">
          <nav className="main_s__big">
            Тут должен быть большой заголовок
          </nav>
          <nav>
            <hr className="main_s__separator" />
          </nav>
          <div className="main-s__items">
            <p className="main_s__second">Lorem ipsum dolor sit amet consectetur. Etiam at leo egestas et amet tincidunt. Justo fringilla blandit nibh rhoncus. </p>
            <button className="main_s__btn">Контакты</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MainScreen;
