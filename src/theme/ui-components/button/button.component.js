import React from "react";
import { Btn } from "./button.styles";

const Button = ({ size, children, valid, ...otherProps }) => {
  console.log(valid);
  return (
    <Btn size={size} valid={valid} {...otherProps}>
      {children}
    </Btn>
  );
};

export default Button;
