import React from "react";

import "../Button/style.scss";

const Button = ({ className, text }) => {
  return <button className={`${className}`}>{text}</button>;
};

export default Button;
