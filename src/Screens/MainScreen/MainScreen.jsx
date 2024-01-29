import React, { useState, useEffect } from "react";
import "../MainScreen/style.scss";

import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import TextMain from "../../Components/TextMain/TextMain";

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
      {isOpen && <Menu isOpen={isOpen} toggleMenu={toggleMenu} />}
      <TextMain />
    </>
  );
};

export default MainScreen;
