import "../ContactsScreen/style.scss";
import redCar from "../../assets/Group-437.webp";

import changan from "../../assets/changan-1.webp";
import Form from "../../Components/Form/Form";

import cPC from "../../assets/cPc.webp";
import wol from "../../assets/wol.webp";
import zeekr from "../../assets/Zeekr.webp";
import bmw from "../../assets/bmw.webp";

const ContactsScreen = () => {
  return (
    <>
      <section className="contacts-mob">
        <div className="contacts">
          <img src={redCar} alt="" className="contacts__img" />
          <div className="contacts__con">
            <img src={changan} alt="" className="contacts__car" />
          </div>
          <Form />
        </div>
      </section>
      <section className="contacts-pc">
        <div className="contacts__pc">
          <nav className="contacts__pc__nav">
            <img src={cPC} alt="img" className="contacts__pc__img" />
          </nav>
          <nav className="contacts__pc__nav">
            <img src={wol} alt="img" className="contacts__pc__img" />
          </nav>
          <nav className="contacts__pc__nav">
            <img src={zeekr} alt="img" className="contacts__pc__zeekr" />
          </nav>
          <nav className="contacts__pc__nav">
            <img src={bmw} alt="img" className="contacts__pc__img" />
          </nav>
        </div>
      </section>
      <Form />
    </>
  );
};

export default ContactsScreen;
