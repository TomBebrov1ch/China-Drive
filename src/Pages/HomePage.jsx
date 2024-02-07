import React from "react";
import MainScreen from "../Screens/MainScreen/MainScreen";
import ContactsScreen from "../Screens/ContactsScreen/ContactsScreen";
import FooterScreen from "../Screens/FooterScreen/FooterScreen";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          "China-Drive - Ваш надежный поставщик запчастей для китайских
          автомобилей и электромобилей"
        </title>
        <meta
          property="og:title"
          content="China-Drive - Ваш надежный поставщик запчастей для китайских
          автомобилей и электромобилей"
        ></meta>
        <meta
          property="og:description"
          content="China-Drive предлагает широкий ассортимент качественных запасных частей и компонентов для китайских автомобилей и электромобилей. Наша компания гарантирует быструю доставку, профессиональную поддержку и доступные цены на все виды деталей, удовлетворяя потребности как частных владельцев, так и автосервисов. Обеспечьте надежность и долговечность вашего транспортного средства с China-Drive."
        ></meta>
        <meta
          name="description"
          content="China-Drive предлагает широкий ассортимент качественных запасных частей и компонентов для китайских автомобилей и электромобилей. Наша компания гарантирует быструю доставку, профессиональную поддержку и доступные цены на все виды деталей, удовлетворяя потребности как частных владельцев, так и автосервисов. Обеспечьте надежность и долговечность вашего транспортного средства с China-Drive."
        ></meta>
      </Helmet>
      <MainScreen />
      <ContactsScreen />
      <FooterScreen />
    </>
  );
};

export default HomePage;
