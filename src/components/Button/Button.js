import React from "react";
import "./button.css";

const Button = ({ text, handleClick }) => {
  return (
    <div className={"button--type--secondary"} onClick={handleClick}>
      {text}
    </div>
  );
};

export default Button;
