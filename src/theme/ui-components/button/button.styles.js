import styled from "styled-components";

const notValid = (theme) => `
  opacity: 0.2;
  cursor: not-allowed;
  &:hover {
    transform: scale(1)
  }
`;

const defaultStyle = (theme) => `
  border: none;
  box-shadow: inset 0px 0px 0 0 rgba(0, 0, 0, 0.3);
  padding: ${theme.spacing.padding.md};
  border-radius: ${theme.spacing.border.md};
  cursor: pointer;
  background-color: ${theme.colors.ui.primary};
  color: white;
  transition: 0.2s ease all;
  min-width: 80px;
  &:hover {
    box-shadow: inset 0px -2px 0 0 rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
    .children {
      margin-top: -2px;
    }
  };
  &:active {
    box-shadow: inset 0px 2px 0 0 rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.5);
    transform: scale(0.99);
    .children {
      margin-top: 6px;
    }
  };

`;

const lg = (theme) => `
  padding: ${theme.spacing.padding.lg};
`;

const sizes = {
  lg,
};

export const Btn = styled.button`
  ${({ theme }) => defaultStyle(theme)};
  ${({ theme, size }) => size && sizes[size](theme)};
  ${({ theme, valid }) => !valid && notValid()};
`;

Btn.defaultProps = {
  valid: true,
};
