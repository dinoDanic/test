import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSteps } from "../../redux/config/config.actions";
import Button from "../../theme/ui-components/button/button.component";
import PopUp from "../../theme/ui-components/pop-up/pop-up.component";
import ConfiguratorStart from "./configurator-start/configurator-start.component";

import { Container, Message } from "./configurator.styles";

const Configurator = () => {
  const activeStep = useSelector((state) => state.config.activeStep);
  const dispatch = useDispatch();
  const [isConfigurator, setIsConfigurator] = useState(false);

  useEffect(() => {
    if (!activeStep) setIsConfigurator(false);
  }, [activeStep]);

  const handleStart = () => {
    dispatch(setSteps(1));
    setIsConfigurator(!isConfigurator);
  };

  return (
    <>
      <Container>
        <Message>Pritisnite gumb niže kako biste pokrenuli</Message>
        <Button size="lg" onClick={handleStart}>
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
