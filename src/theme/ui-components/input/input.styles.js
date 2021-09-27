import styled from "styled-components";

export const MyInput = styled.input`
  padding: ${(props) => props.theme.spacing.padding.md};
  border: 1px solid ${(props) => props.theme.colors.ui.darkGray};
  border-radius: ${(props) => props.theme.spacing.border.md};
  width: 100%;
  outline: none;
  font-size: 0.8rem;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.ui.primary};
  }
`;
