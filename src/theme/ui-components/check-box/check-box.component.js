import React from "react";
import { CheckBoxInput, Label } from "./check-box.styles";

const CheckBox = ({ value, price, ...otherProps }) => {
  return (
    <>
      <CheckBoxInput id={value} value={value} type="checkbox" {...otherProps} />
      <Label htmlFor={value}>
        {value}
        {price && `(${price} kn)`}
      </Label>
    </>
  );
};

export default CheckBox;
