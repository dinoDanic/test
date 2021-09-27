import React, { useState, useEffect } from "react";
import { Container, CarHolder, CarItem, Buttons } from "./step1.styles";

import Title from "../../../../../theme/ui-components/title/title.component";
import Error from "../../../../../theme/ui-components/error/error.component";
import SelectCar from "./select-car/select-car.component";
import Button from "../../../../../theme/ui-components/button/button.component";

import { carsData } from "./cars.data";

const Step1 = ({ setSteps }) => {
  const [buttonValid, setButtonValid] = useState(false);
  const [error, setError] = useState("");

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
  }, [buttonValid]);

  return (
    <Container>
      <Title>Korak 1. Odaberite proizvođača vašeg vozila</Title>
      {error && <Error message={error} />}
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
