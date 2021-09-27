import React from "react";
import { Container } from "./box.styles";

const Box = ({ size, children }) => {
  return <Container size={size}>{children}</Container>;
};

export default Box;
