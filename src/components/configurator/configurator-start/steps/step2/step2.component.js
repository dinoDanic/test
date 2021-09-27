import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { serviceData } from "../../../../../mock/service.data";

import { Container, ServiceItem, Services, Buttons } from "./step2.styles";

import SelectService from "./select-service/select-service.component";
import Price from "./price/price.component";
import Button from "../../../../../theme/ui-components/button/button.component";

const Step2 = ({ setError }) => {
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
    } else {
      setButtonValidation(false);
      setError("Odaberite jednu ili više");
    }
  }, [selectedServices, setError]);

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
        <Button>Nazad</Button>
        <Button valid={buttonValidation}>Dalje</Button>
      </Buttons>
    </Container>
  );
};

export default Step2;
