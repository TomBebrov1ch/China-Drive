import React from "react";
import "../TextMain/style.scss";

const TextMain = ({
  classNameC,
  classNameP,
  classNameN,
  classNameS,
  textFirst,
  textBig,
  textSecond,
}) => {
  return (
    <div className={`${classNameC}`}>
      <p className={`${classNameP}`}>{textFirst}</p>
      <h2 className={`${classNameN}`}>{textBig}</h2>
      <p className={`${classNameS}`}>{textSecond}</p>
    </div>
  );
};

export default TextMain;
