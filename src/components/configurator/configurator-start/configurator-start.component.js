import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ConfigContainer, Title } from "./configurator-start.styles";

import Box from "../../../theme/ui-components/box/box.component";
import Step from "./steps/step/step.component";
import Step1 from "./steps/step1/step1.component";
import Step2 from "./steps/step2/step2.component";
import Step3 from "./steps/step3/step3.component";

const ConfiguratorStart = () => {
  const activeStep = useSelector((state) => state.config.activeStep);
  const [error, setError] = useState("");
  return (
    <ConfigContainer>
      <Box size="lg">
        <Title>Konfigurator servisa</Title>
        {activeStep === "step1" && (
          <Step
            title="Korak 1. Odaberite proizvođača vašeg vozila"
            error={error}
          >
            <Step1 setError={setError} />
          </Step>
        )}
        {activeStep === "step2" && (
          <Step
            title="Korak 2. Odaberite jednu ili više usluga za koje ste "
            error={error}
          >
            <Step2 setError={setError} />
          </Step>
        )}
        {activeStep === "step3" && (
          <Step title="Korak 3. Vaši kontakt podaci" error={error}>
            <Step3 setError={setError} />
          </Step>
        )}
      </Box>
    </ConfigContainer>
  );
};

export default ConfiguratorStart;
