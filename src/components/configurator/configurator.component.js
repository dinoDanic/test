import React from "react";
import Button from "../../theme/ui-components/button/button.component";

import { Container, Message } from "./configurator.styles";

const Configurator = () => {
  return (
    <Container>
      <Message>Pritisnite gumb niže kako biste pokrenuli</Message>
      <Button>Pokreni konfigurator</Button>
    </Container>
  );
};

export default Configurator;
