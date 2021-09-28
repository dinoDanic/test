import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: absolute;
  top: -300%;
`;
export const Bubble = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.ui.dangerLight};
  color: white;
  padding: ${(props) => props.theme.spacing.padding.md};
  border-radius: ${(props) => props.theme.spacing.border.md};
  min-width: 200px;
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
`;

export const DefaultMessage = styled.div`
  font-weight: 400;
`;

export const Arrow = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.ui.dangerLight};
  position: absolute;
  bottom: -5px;
  transform: rotate(45deg);
`;

export const Message = styled.div``;
