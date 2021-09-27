import React from "react";
import { Container, Title, Message, Error } from "./step.styles";

const Step = ({ children, title, message, error }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <Error>{error}</Error>
      {children}
    </Container>
  );
};

export default Step;
