import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 20%;
  @media (${(props) => props.theme.spacing.mobile.sm}) {
    align-content: center;
  }
`;
