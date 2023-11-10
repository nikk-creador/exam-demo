import React from "react";

const Button = ({ buttonText, ...rest }) => {
  return <button {...rest}>{buttonText}</button>;
};

export default Button;
