import React from "react";
import { RadioInput, Label } from "./radio.styles";

const Radio = ({ checked, name, value, ...otherProps }) => {
  return (
    <>
      <RadioInput
        {...otherProps}
        value={value}
        name={name}
        id={value}
        checked={checked}
        type="radio"
      />
      <Label htmlFor={value}>{value}</Label>
    </>
  );
};

export default Radio;
