import React from 'react'
import { Link as ScrollLink } from "react-scroll";

import '../FooterScreen/style.scss'
import logo from '../../assets/china.svg'
import Button from '../../Components/Button/Button'

const FooterScreen = () => {
    return (
        <div className='footer'>
            <img src={logo} alt="" className='footer__logo' />
            <ScrollLink smooth to='header'>
                <p className='footer__text'>Главная</p>
            </ScrollLink>
            <ScrollLink smooth to={'contacts'}>
                <p className='footer__text'>Бренды</p>
            </ScrollLink>
            <ScrollLink smooth to={'form'}>
                <p className='footer__text'>Контакты</p>
            </ScrollLink>
            <Button className={"сontacts-btn"} text={'Заказать звонок'} />
        </div>
    )
}

export default FooterScreen