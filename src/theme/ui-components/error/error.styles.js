import styled from "styled-components";

export const ErrorContainer = styled.div`
  padding: ${(props) => props.theme.spacing.padding.md};
  border: 1px solid #eee;
  background-color: ${(props) => props.theme.colors.ui.gray};
  border-radius: ${(props) => props.theme.spacing.border.md};
  color: ${(props) => props.theme.colors.ui.danger};
  font-size: 1rem;
  font-weight: 300;
  margin: 20px 0;
`;
