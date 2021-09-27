import React from "react";
import { Container } from "./step1.styles";

import Title from "../../../../theme/ui-components/title/title.component";
import SelectCar from "./select-car/select-car.component";

import { carsData } from "./cars.data";

const Step1 = () => {
  console.log(carsData);
  return (
    <Container>
      <Title>Korak 1. Odaberite proizvođača vašeg vozila</Title>
      {carsData.map((car) => (
        <SelectCar car={car} key={car.carName} />
      ))}
    </Container>
  );
};

export default Step1;
