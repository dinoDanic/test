import styled from "styled-components";

export const Btn = styled.button`
  padding: ${(props) => props.theme.spacing.padding.lg};
  border: none;
  /* border-bottom: 4px solid rgba(0, 0, 0, 0.2); */
  box-shadow: inset 0px 0px 0 0 rgba(0, 0, 0, 0.3);
  border-radius: ${(props) => props.theme.spacing.border.md};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.ui.primary};
  color: white;
  transition: 0.2s ease all;
  &:hover {
    box-shadow: inset 0px -2px 0 0 rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
    .children {
      margin-top: -2px;
    }
  }
  &:active {
    box-shadow: inset 0px 2px 0 0 rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.5);
    transform: scale(0.99);

    .children {
      margin-top: 6px;
    }
  }
`;
