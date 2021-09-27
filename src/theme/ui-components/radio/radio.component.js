import React from "react";
import { RadioInput } from "./radio.styles";

const Radio = ({ name, value, ...otherProps }) => {
  return <RadioInput name={name} type="radio" value={value} {...otherProps} />;
};

export default Radio;
