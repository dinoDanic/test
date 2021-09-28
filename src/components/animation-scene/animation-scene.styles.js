import styled from "styled-components";
import { motion } from "framer-motion";

const height = "100px";

export const Container = styled(motion.div)`
  position: absolute;
  top: -${height};
  left: 0;
  width: 100%;
  height: ${height};
`;

export const CarHolder = styled(motion.div)`
  position: absolute;
  height: 25px;
  bottom: 0;
  left: 20px;
  display: flex;
  justify-content: center;
  /* background-color: red; */
`;
export const Car = styled.img``;

export const BuildingHolder = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
  height: 93px;
`;
export const Building = styled.img``;
