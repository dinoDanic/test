import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { serviceData } from "../../../../mock/service.data";

import { Container, ServiceItem, Services } from "./step2.styles";

import SelectService from "./select-service/select-service.component";
import Price from "./price/price.component";

const Step2 = () => {
  const [price, setPrice] = useState(null);
  const selectedServices = useSelector(
    (state) => state.config.selectedServices
  );

  useEffect(() => {
    let sum = 0;
    selectedServices.forEach((service) => {
      sum += service.price;
    });
    setPrice(sum);
  }, [selectedServices]);

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
    </Container>
  );
};

export default Step2;
