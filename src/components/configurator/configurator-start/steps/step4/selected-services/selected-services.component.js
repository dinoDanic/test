import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Container,
  Item,
  Name,
  Price,
  Calculator,
  Discount,
  Text,
  Value,
} from "./selected-services.styles";

const SSD_MOCK = [
  { name: "Servis klima uređaja", price: 299 },
  { name: "Balansiranje guma", price: 50 },
  { name: "Zamjena ulja u kočnicama", price: 229 },
];
const discount_mock = 20;

const SelectedServices = () => {
  const SSD = useSelector((state) => state.config.selectedServices);
  const discount = useSelector((state) => state.config.discount);
  const [fullPrice, setFullPrice] = useState(null);
  const [discountValue, setDiscountValue] = useState(null);
  const [priceWithDiscount, setPriceWithDiscount] = useState(null);

  useEffect(() => {
    let sum = 0;
    SSD.forEach((service) => {
      sum += service.price;
    });
    setFullPrice(sum);

    if (discount) {
      const dv = (fullPrice * discount) / 100;
      const newPrice = fullPrice - dv;
      setDiscountValue(dv);
      setPriceWithDiscount(newPrice);
    }
  }, [discount, fullPrice, SSD]);

  return (
    <Container>
      {SSD.map((service) => {
        console.log(service);
        return (
          <Item key={service.name}>
            <Name>{service.name}</Name>
            <Price>{service.price} kn</Price>
          </Item>
        );
      })}
      <Calculator>
        {discount && (
          <Discount>
            <Text> Popust {discount} %: </Text>
            <Value>-{discountValue} kn</Value>
          </Discount>
        )}
        <Discount>
          <Text>Ukupno: </Text>
          <Value>
            <strong>
              {priceWithDiscount ? priceWithDiscount : fullPrice}
              {/*  */} kn
            </strong>
          </Value>
        </Discount>
      </Calculator>
    </Container>
  );
};

export default SelectedServices;
