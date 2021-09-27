import React from "react";
import { ErrorContainer } from "./error.styles";

const Error = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default Error;
