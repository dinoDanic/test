import React, { useState, useEffect } from "react";
import { Container, CarHolder, CarItem, Buttons, Error } from "./step1.styles";

import Title from "../../../../theme/ui-components/title/title.component";
import SelectCar from "./select-car/select-car.component";
import Button from "../../../../theme/ui-components/button/button.component";

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
        setp2: true,
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
      {error && <Error>{error}</Error>}
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
