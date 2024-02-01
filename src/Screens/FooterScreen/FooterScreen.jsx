import React from 'react'
import { Link as ScrollLink } from "react-scroll";

import '../FooterScreen/style.scss'
import logo from '../../assets/china.svg'
import logoPc from '../../assets/china.svg'
import Button from '../../Components/Button/Button'

const FooterScreen = () => {
    return (
        <>
            <section className='footer-mob'>
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
            </section>
            <section className='footer_pc'>
                <div className='footer-pc'>
                    <img src={logoPc} alt="" className='footer-pc__logo' />
                    <div className="footer-pc__items">
                        <ScrollLink className='footer-pc__items__text' smooth to='header'>
                            Главная
                        </ScrollLink>
                        <ScrollLink className='footer-pc__items__text' smooth to={'contacts'}>
                            Бренды
                        </ScrollLink>
                        <ScrollLink className='footer-pc__items__text' smooth to={'form'}>
                            Контакты
                        </ScrollLink>
                    </div>
                    <button className="container__item__btn">Заказать звонок</button>
                </div>
            </section>
        </>
    )
}

export default FooterScreen