import React, { useState } from "react";
import Button from "../../theme/ui-components/button/button.component";
import PopUp from "../../theme/ui-components/pop-up/pop-up.component";
import ConfiguratorStart from "./configurator-start/configurator-start.component";

import { Container, Message } from "./configurator.styles";

const Configurator = () => {
  const [isConfigurator, setIsConfigurator] = useState(false);
  return (
    <>
      <Container>
        <Message>Pritisnite gumb niže kako biste pokrenuli</Message>
        <Button size="lg" onClick={() => setIsConfigurator(!isConfigurator)}>
          Pokreni konfigurator
        </Button>
      </Container>
      {isConfigurator && (
        <PopUp setLayer={setIsConfigurator}>
          <ConfiguratorStart />
        </PopUp>
      )}
    </>
  );
};

export default Configurator;
