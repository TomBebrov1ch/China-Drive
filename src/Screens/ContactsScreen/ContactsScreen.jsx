import { useState } from "react";
import "../ContactsScreen/style.scss";
import redCar from "../../assets/Group-437.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import PopUp from "../../Components/PopUp/PopUp";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";


import Form from "../../Components/Form/Form";

import changan from "../../assets/changan-1.webp";
import cPC from "../../assets/cPc.webp";
import wol from "../../assets/wol.webp";
import zeekr from "../../assets/Zeekr.webp";
import bmw from "../../assets/bmw.webp";
import nio from "../../assets/NIO_logo 1.svg";
import haval from "../../assets/Haval_2023_logo 1.svg";
import chery from "../../assets/chery_logo_emblem_512 2.svg";
import exeed from "../../assets/logo 1.svg";
import jac from "../../assets/logo (1) 1.svg";
import geely from "../../assets/logo (2) 1.svg";

const ContactsScreen = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <section className="contacts-mob">
        <div className="contacts">
          <Fade direction="right" triggerOnce>
            <img src={redCar} alt="" className="contacts__img" />
          </Fade>
          <div className="contacts__con">
            <Swiper
              className="contacts__con__swiper"
              slidesPerView={1}
              spaceBetween={64}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img src={changan} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img src={wol} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img src={zeekr} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img src={bmw} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img src={nio} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img
                    src={haval}
                    alt=""
                    className="contacts__con__swiper__haval"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img
                    src={chery}
                    alt=""
                    className="contacts__con__swiper__chery"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img
                    src={exeed}
                    alt=""
                    className="contacts__con__swiper__haval"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img
                    src={jac}
                    alt=""
                    className="contacts__con__swiper__chery"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__con__swiper__car">
                  <img
                    src={geely}
                    alt=""
                    className="contacts__con__swiper__haval"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="contacts-pc">
        <div className="contacts__pc">
          <Swiper
            className="contacts__pc__swiper swiper"
            slidesPerView={4}
            spaceBetween={64}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="contacts__pc__nav">
                <img src={cPC} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={wol} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={zeekr} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={bmw} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={nio} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={haval} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={chery} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={exeed} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={jac} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="contacts__pc__nav">
              <div className="contacts__pc__nav">
                <img src={geely} alt="img" className="contacts__pc__img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {showPopUp && <PopUp setShowPopup={setShowPopUp} />}
      <Form setShowPopup={setShowPopUp} showPopUp={showPopUp} />
    </>
  );
};

export default ContactsScreen;
