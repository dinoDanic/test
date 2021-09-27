import React from "react";
import ReactDOM from "react-dom";

import { Container, Layer, Content } from "./pop-up.styles";
import { popContentAnimation } from "../../animations";

const PopUp = ({ setLayer, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Container>
          <Layer onClick={() => setLayer(false)} />
          <Content
            variants={popContentAnimation}
            animate="animate"
            initial="initial"
          >
            {children}
          </Content>
        </Container>,
        document.getElementById("pop")
      )}
    </>
  );
};

export default PopUp;
