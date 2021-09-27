import React, { useState } from "react";
import Box from "../../../theme/ui-components/box/box.component";

import { Container, Title } from "./configurator-start.styles";

import Step1 from "../steps/step1/step1.component";
import Step2 from "../steps/step2/step2.component";

const ConfiguratorStart = () => {
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
  });
  return (
    <Container>
      <Box size="lg">
        <Title>Konfigurator servisa</Title>
        {steps.step1 && <Step1 setSteps={setSteps} />}
        {steps.step2 && <Step2 setSteps={setSteps} />}
      </Box>
    </Container>
  );
};

export default ConfiguratorStart;
