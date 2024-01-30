import React from 'react'

import '../Form/style.scss'
import TextMain from '../TextMain/TextMain'
import Button from '../Button/Button'

const Form = () => {
    return (
        <>
            <div className='form'>
                <TextMain classNameC={'main'}
                    classNameP={'main__par'}
                    textFirst={'Контакты'}
                />
                <nav className='form__main'>
                    Свяжитесь с <span className='form__main-span'>нами</span>
                </nav>
                <p className='form__sec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <input type="text" placeholder='Ваше имя' className='form__input' />
                <hr className='form__separator' />
                <input type="text" placeholder='Ваш телефон' className='form__input' />
                <hr className='form__separator' />
                <input type="text" placeholder='VIN автомобиля' className='form__input' />
                <hr className='form__separator' />
                <Button className={"сontacts-btn"} text={'Заказать звонок'} />
            </div>
        </>
    )
}

export default Form