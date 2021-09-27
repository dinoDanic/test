import React, { useState } from "react";
import { Container } from "./step2.styles";

import Title from "../../../../../theme/ui-components/title/title.component";

const Step2 = () => {
  const [error, setError] = useState("");
  return (
    <Container>
      <Title>step 2asfdfdsa</Title>
      {error}
    </Container>
  );
};

export default Step2;
