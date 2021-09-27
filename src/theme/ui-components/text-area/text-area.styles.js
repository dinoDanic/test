import styled from "styled-components";

export const TxtArea = styled.textarea`
  padding: ${(props) => props.theme.spacing.padding.md};
  border: 1px solid ${(props) => props.theme.colors.ui.darkGray};
  border-radius: ${(props) => props.theme.spacing.border.md};
  outline: none;
  font-size: 0.8rem;
  max-height: 240px;
  min-height: 80px;
  width: 100%;
  resize: none;
  font-family: Roboto;
  font-weight: 300;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.ui.primary};
  }
`;
