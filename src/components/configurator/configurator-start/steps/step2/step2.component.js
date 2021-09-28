import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { serviceData } from "../../../../../mock/service.data";

import { setSteps } from "../../../../../redux/config/config.actions";

import { Container, ServiceItem, Services, Buttons } from "./step2.styles";

import SelectService from "./select-service/select-service.component";
import Price from "./price/price.component";
import Button from "../../../../../theme/ui-components/button/button.component";

const Step2 = ({ setError }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(null);
  const [buttonValidation, setButtonValidation] = useState(false);
  const selectedServices = useSelector(
    (state) => state.config.selectedServices
  );

  useEffect(() => {
    let sum = 0;
    selectedServices.forEach((service) => {
      sum += service.price;
    });
    setPrice(sum);
    if (selectedServices.length > 0) {
      setButtonValidation(true);
      setError("");
    } else {
      setButtonValidation(false);
    }
  }, [selectedServices, setError]);

  const handleNext = () => {
    if (!buttonValidation) {
      setError("Odaberite jednu ili više");
    } else {
      setError("");
      dispatch(setSteps(3));
    }
  };

  const handleBack = () => {
    dispatch(setSteps(1));
  };

  return (
    <Container>
      <Services>
        {serviceData.map((service) => (
          <ServiceItem key={service.name}>
            <SelectService service={service} />
          </ServiceItem>
        ))}
      </Services>
      <Price price={price} />
      <Buttons>
        <Button onClick={handleBack}>Nazad</Button>
        <Button valid={buttonValidation} onClick={handleNext}>
          Dalje
        </Button>
      </Buttons>
    </Container>
  );
};

export default Step2;
