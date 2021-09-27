import React from "react";

import { Container, Label } from "./select-car.styles";

import Radio from "../../../../../theme/ui-components/radio/radio.component";

const SelectCar = ({ car, setButtonValid }) => {
  const { carName } = car;

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value) {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  };

  return (
    <Container>
      <Radio name="car" value={carName} onChange={(e) => handleSelect(e)} />
    </Container>
  );
};

export default SelectCar;
