import React from "react";
import { RadioInput, Label } from "./radio.styles";

const Radio = ({ name, value, ...otherProps }) => {
  return (
    <>
      <RadioInput
        value={value}
        name={name}
        id={value}
        type="radio"
        {...otherProps}
      />
      <Label htmlFor={value}>{value}</Label>
    </>
  );
};

export default Radio;
