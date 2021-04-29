import React from "react";
import "../styles/Button.css";

const isArithmOperator = (number) => {
  return !isNaN(number) || number === '=' || number === '.';
};

export const Button = (props) => (
  <div
    className={`button-form ${
      isArithmOperator(props.children) ? null : "operator"
    }`}
    onClick={()=>props.handleClick(props.children)}
    >
    {props.children}
  </div>
);

