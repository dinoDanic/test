import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Step, StepHold, SuccessStep } from "./step-count.styles";

const StepCount = () => {
  const activeStep = useSelector((state) => state.config.activeStep);

  useEffect(() => {}, [activeStep]);

  return (
    <Container>
      <StepHold>
        <Step isActive={activeStep === 1 ? true : false}>1</Step>
      </StepHold>
      <StepHold>
        <Step isActive={activeStep === 2 ? true : false}>2</Step>
      </StepHold>
      <StepHold>
        <Step isActive={activeStep === 3 ? true : false}>3</Step>
      </StepHold>
      <StepHold>
        <Step isActive={activeStep === 4 ? true : false}>4</Step>
      </StepHold>
      <StepHold>
        <Step>.</Step>
      </StepHold>
      <StepHold>
        <SuccessStep style={{ marginTop: activeStep === 5 ? "5px" : "-30px" }}>
          Hvala!
        </SuccessStep>
      </StepHold>
    </Container>
  );
};

export default StepCount;
