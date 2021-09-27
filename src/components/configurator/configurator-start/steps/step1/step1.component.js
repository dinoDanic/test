import React, { useState, useEffect } from "react";
import { Container, CarHolder, CarItem, Buttons } from "./step1.styles";

import SelectCar from "./select-car/select-car.component";
import Button from "../../../../../theme/ui-components/button/button.component";

import { carsData } from "../../../../../mock/cars.data";

const Step1 = ({ setSteps, setError }) => {
  const [buttonValid, setButtonValid] = useState(false);

  const handleButton = () => {
    if (!buttonValid) {
      setError("Odabir je obavezan");
    } else {
      setError("");
      setSteps({
        step1: false,
        step2: true,
      });
    }
  };

  useEffect(() => {
    if (buttonValid) {
      setError("");
    }
  }, [buttonValid, setError]);

  return (
    <Container>
      <CarHolder>
        {carsData.map((car) => (
          <CarItem key={car.carName}>
            <SelectCar car={car} setButtonValid={setButtonValid} />
          </CarItem>
        ))}
      </CarHolder>
      <Buttons>
        <Button valid={buttonValid} onClick={handleButton}>
          Dalje
        </Button>
      </Buttons>
    </Container>
  );
};

export default Step1;
