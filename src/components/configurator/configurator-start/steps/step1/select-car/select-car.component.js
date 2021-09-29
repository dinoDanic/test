import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./select-car.styles";
import { setCar } from "../../../../../../redux/config/config.actions";

import Radio from "../../../../../../theme/ui-components/radio/radio.component";

const SelectCar = ({ car, setButtonValid }) => {
  const config = useSelector((state) => state.config);
  const { carName } = car;
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (carName === config.selectedCar) {
      setButtonValid(true);
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [config, carName, setButtonValid]);

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
      <Radio
        name="car"
        checked={checked}
        value={carName}
        onChange={(e) => handleSelect(e)}
      />
      {/* <input
        type="radio"
        id={carName}
        value={carName}
        name="car"
        ref={radioRef}
        onChange={(e) => handleSelect(e)}
      />
      <label htmlFor={carName}>{carName}</label> */}
    </Container>
  );
};

export default SelectCar;
