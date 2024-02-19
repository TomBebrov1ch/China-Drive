import React from 'react';
import { Fade } from 'react-awesome-reveal';
import logo from "../../assets/logo.svg";

import './style.scss'

const PopUp = ({ setShowPopup }) => {
    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        <div className='popup'>
            <Fade direction='up'>
                <div className="popup__items">
                    <img src={logo} alt="" className='popup__items__logo' />
                    <p className='popup__items__text'>Спасибо за Заявку!</p>
                    <p className='popup__items__second'>Мы скоро с вами свяжемся</p>
                    <button className='popup__items__btn' onClick={closePopup}>Закрыть меню</button>
                </div>
            </Fade>
        </div>
    );
};

export default PopUp;