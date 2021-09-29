import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { decNumber } from "../../../../../../utils/";

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
        return (
          <Item key={service.name}>
            <Name>{service.name}</Name>
            <Price> {decNumber(service.price)} kn</Price>
          </Item>
        );
      })}
      <Calculator>
        {discount && (
          <Discount>
            <Text> Popust {discount} %: </Text>
            <Value>-{decNumber(discountValue)} kn</Value>
          </Discount>
        )}
        <Discount>
          <Text>Ukupno: </Text>
          <Value>
            <strong>
              {priceWithDiscount
                ? decNumber(priceWithDiscount)
                : decNumber(fullPrice)}
              {/*  */} kn
            </strong>
          </Value>
        </Discount>
      </Calculator>
    </Container>
  );
};

export default SelectedServices;
