import React from "react";

const Button = ({ text, Color }) => {
  return <button className={`btn ${Color}`}>{text}</button>;
};

export default Button;
