import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ConfigContainer, Title } from "./configurator-start.styles";

import AnimationScene from "../../animation-scene/animation-scene.component";
import Box from "../../../theme/ui-components/box/box.component";
import Step from "./steps/step/step.component";
import Step1 from "./steps/step1/step1.component";
import Step2 from "./steps/step2/step2.component";
import Step3 from "./steps/step3/step3.component";
import Step4 from "./steps/step4/step4.component";

const ConfiguratorStart = () => {
  const activeStep = useSelector((state) => state.config.activeStep);
  const [error, setError] = useState("");

  return (
    <ConfigContainer>
      <Box size="lg">
        <AnimationScene />
        <Title>Konfigurator servisa</Title>
        {activeStep === 1 && (
          <Step
            title="Korak 1. Odaberite proizvođača vašeg vozila"
            error={error}
          >
            <Step1 setError={setError} />
          </Step>
        )}
        {activeStep === 2 && (
          <Step
            title="Korak 2. Odaberite jednu ili više usluga za koje ste "
            error={error}
          >
            <Step2 setError={setError} />
          </Step>
        )}
        {activeStep === 3 && (
          <Step title="Korak 3. Vaši kontakt podaci" error={error}>
            <Step3 setError={setError} />
          </Step>
        )}
        {activeStep === 4 && (
          <Step
            title="Korak 4. Pregled i potvrda vašeg odabira"
            message="Molimo vas da još jednomm pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje pored svake od gategorija. Kada ste provjeriili i potvrdili ispravnost svojih podataka pritisnite guma pošalji na dnu, za slanje upita za servis."
            error={error}
          >
            <Step4 setError={setError} />
          </Step>
        )}
      </Box>
    </ConfigContainer>
  );
};

export default ConfiguratorStart;
