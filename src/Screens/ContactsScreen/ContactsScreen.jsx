import '../ContactsScreen/style.scss'
import redCar from '../../assets/Group-437.webp'


import changan from '../../assets/changan-1.webp'
import vector from '../../assets/Vector.webp'
import zeekr from '../../assets/Vector-_1_.webp'
import Form from '../../Components/Form/Form'

const ContactsScreen = () => {
    return (
        <div className='contacts'>
            <img src={redCar} alt="" className='contacts__img' />
            <div className="contacts__con">

                <img src={changan} alt="" className='contacts__car' />
            </div>
            <Form />
        </div>
    )
}

export default ContactsScreen