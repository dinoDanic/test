import { AnimatePresence } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { errorAnimation } from "../../../theme/animations";
import {
  Container,
  Bubble,
  DefaultMessage,
  Arrow,
  Message,
} from "./error-message.styles";

const ErrorMessage = () => {
  const errorMessage = useSelector((state) => state.config.errorMessage);
  return (
    <Container>
      <AnimatePresence>
        {errorMessage && (
          <Bubble
            variants={errorAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Message>
              <DefaultMessage>Ne mogu nastaviti vožnju!</DefaultMessage>
              {errorMessage}
            </Message>
            <Arrow />
          </Bubble>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ErrorMessage;
