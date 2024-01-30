import React from "react";
import "../TextMain/style.scss";





const TextMain = ({ classNameC, classNameP, classNameN, classNameS, textFirst, textBig, textSecond }) => {
  return (
    <div className={`${classNameC}`}>
      <p className={`${classNameP}`} >
        {textFirst}
      </p>
      <nav className={`${classNameN}`}>
        {textBig}
      </nav>
      <p className={`${classNameS}`} >
        {textSecond}
      </p>
    </div>

  )
};

export default TextMain;
