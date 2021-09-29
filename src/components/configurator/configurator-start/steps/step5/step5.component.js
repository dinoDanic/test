import React from "react";
import { useDispatch } from "react-redux";

import { setSteps } from "../../../../../redux/config/config.actions";

import Button from "../../../../../theme/ui-components/button/button.component";

import { Container, Title, Message } from "./step5.styles";

const Step5 = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSteps(null));
  };
  return (
    <Container>
      <Title>Vaša prijava je uspješno poslana</Title>
      <Message>
        Vaša prijava je uspješno poslana i zaprimljena. <br /> Kontaktirati ćemo
        vas u najkraćem mogućem roku. Hvala vam.
      </Message>
      <Button onClick={handleClose}>Zatvori</Button>
    </Container>
  );
};

export default Step5;
