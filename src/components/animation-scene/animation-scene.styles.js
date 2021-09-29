import styled from "styled-components";
import { motion } from "framer-motion";

const height = "100px";

let car = 49 / 2;

export const Container = styled(motion.div)`
  position: absolute;
  top: -${height};
  left: 0;
  width: 100%;
  height: ${height};
  padding: 0 32px;
`;

export const ContainerHold = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;

export const CarHolder = styled(motion.div)`
  position: absolute;
  height: 25px;
  bottom: 0;
  left: -${car}px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
export const Car = styled.img``;

export const BuildingHolder = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 100;
  right: 0px;
  height: 93px;
`;
export const Building = styled.img``;
