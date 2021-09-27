import styled from "styled-components";

<<<<<<< HEAD:src/theme/ui-components/error/error.styles.js
export const ErrorContainer = styled.div`
=======
export const Container = styled.div``;

export const CarHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CarItem = styled.div`
  min-width: 200px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Error = styled.div`
>>>>>>> stepper:src/components/configurator/steps/step1/step1.styles.js
  padding: ${(props) => props.theme.spacing.padding.md};
  border: 1px solid #eee;
  background-color: ${(props) => props.theme.colors.ui.gray};
  border-radius: ${(props) => props.theme.spacing.border.md};
  color: ${(props) => props.theme.colors.ui.danger};
  font-size: 1rem;
  font-weight: 300;
  margin: 20px 0;
`;
