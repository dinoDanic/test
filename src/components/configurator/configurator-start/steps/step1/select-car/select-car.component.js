import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "./select-car.styles";
import { setCar } from "../../../../../../redux/config/config.actions";

import Radio from "../../../../../../theme/ui-components/radio/radio.component";

const SelectCar = ({ car, setButtonValid }) => {
  const { carName } = car;
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value) {
      setButtonValid(true);
      dispatch(setCar(value));
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
