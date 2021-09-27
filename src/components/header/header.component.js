import React from "react";
import { Container, Head, Img, Message } from "./header.styles";
import TokicLogoImg from "../../img/tokic-logo.svg";

const Header = () => {
  return (
    <Container>
      <Head>
        <Img src={TokicLogoImg} />
        <Message>
          <h4>
            Konfigurator servisa <br />
          </h4>
          <h5>Izračunajte trošak servisa</h5>
        </Message>
      </Head>
    </Container>
  );
};

export default Header;
