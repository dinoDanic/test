import React from "react";

import { Container, Label } from "./select-car.styles";

import Radio from "../../../../../theme/ui-components/radio/radio.component";

const SelectCar = ({ car }) => {
  const { carName } = car;

  const handleSelect = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <Container>
      <Radio
        id={carName}
        name="car"
        value={carName}
        onChange={(e) => handleSelect(e)}
      />
      <Label htmlFor={carName}>{carName}</Label>
    </Container>
  );
};

export default SelectCar;
