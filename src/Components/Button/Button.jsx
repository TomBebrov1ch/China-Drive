import React from "react";

import "../Button/style.scss";

const Button = ({ className, text }) => {
  return (
    <button type="submit" className={`${className}`}>
      {text}
    </button>
  );
};

export default Button;
