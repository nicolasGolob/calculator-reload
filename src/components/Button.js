import React from "react";
import "../styles/Button.css";

const isArithmOperator = (number) => {
  return !isNaN(number) || number === '=' || number === '.';
};

const Button = (props) => (
  <div
    className={`button-form ${
      isArithmOperator(props.children) ? null : "arithm-operator"
    }`}
  >
    {props.children}
  </div>
);

export default Button;