import React, { useState, useRef, useEffect } from "react";

const Selector = ({
  selectedCar,
  setSelectedCar,
  setIsCarListVisible,
  isCarListVisible,
}) => {
  const carListRef = useRef(null);

  const Cars = [
    "Zeekr",
    "Changan",
    "Volkswagen",
    "NIO",
    "BMW",
    "Haval",
    "Chery",
    "Exeed",
    "JAC",
    "Geely",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carListRef.current && !carListRef.current.contains(event.target)) {
        setIsCarListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCarSelect = (car) => {
    console.log("Выбран автомобиль:", car);
    setSelectedCar(car);
    setIsCarListVisible(false);
  };

  return (
    <div>
      {isCarListVisible && (
        <div ref={carListRef} className="form__input__list">
          {Cars.map((car) => (
            <div
              key={car}
              onClick={() => handleCarSelect(car)}
              className="form__input__list__item"
            >
              {car}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
