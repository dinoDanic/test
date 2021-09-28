import React from "react";
import { Container, Title, Message, Error, Head } from "./step.styles";

const Step = ({ children, title, message, error }) => {
  return (
    <Container>
      <Head>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Head>
      <Error>{error}</Error>
      {children}
    </Container>
  );
};

export default Step;
