import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const StepHold = styled.div`
  width: 1px;
  display: flex;
  justify-content: center;
  &:nth-child(5) {
    opacity: 0;
  }
  &:last-child {
    position: absolute;
    right: 70px;
  }
`;

export const Step = styled.div`
  ${({ theme, isActive }) => isActive && activeStyle(theme)};
  background-color: ${(props) => props.theme.colors.ui.gray};
  color: #333;
  border: 1px solid ${(props) => props.theme.colors.ui.darkGray};
  padding: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  border-radius: 100%;
  opacity: 0.5;
  transform: scale(0.8);
  transition: 0.3s ease all;
  &:first-child {
  }
  &:nth-child(2) {
  }
  &:nth-child(3) {
  }
  &:nth-child(4) {
  }
  &:last-child {
    /* opacity: 0; */
  }
`;

export const SuccessStep = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.ui.success};
  transition: 0.3s ease all;
  font-weight: 400;
`;

const activeStyle = (theme) => `
  opacity: 1 !important;
  transform: scale(1) !important;
`;
