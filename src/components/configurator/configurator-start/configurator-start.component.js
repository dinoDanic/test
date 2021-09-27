import React, { useState } from "react";
import Box from "../../../theme/ui-components/box/box.component";

import { ConfigContainer, Title } from "./configurator-start.styles";

import Step from "../steps/step/step.component";
import Step1 from "./steps/step1/step1.component";
import Step2 from "./steps/step2/step2.component";

const ConfiguratorStart = () => {
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
  });

  const [error, setError] = useState("");
  return (
    <ConfigContainer>
      <Box size="lg">
        <Title>Konfigurator servisa</Title>
        {steps.step1 && (
          <Step
            title="Korak 1. Odaberite proizvođača vašeg vozila"
            error={error}
          >
            <Step1 setSteps={setSteps} setError={setError} />
          </Step>
        )}
        {steps.step2 && (
          <Step
            title="Korak 2. Odaberite jednu ili više usluga za koje ste "
            error={error}
          >
            <Step2 setSteps={setSteps} setError={setError} />
          </Step>
        )}
      </Box>
    </ConfigContainer>
  );
};

export default ConfiguratorStart;
