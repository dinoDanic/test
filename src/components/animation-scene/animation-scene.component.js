import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Car,
  CarHolder,
  BuildingHolder,
  Building,
} from "./animation-scene.styles";

import carImage from "../../img/car.svg";
import buildingImage from "../../img/building.svg";

const AnimationScene = () => {
  const [size, setSize] = useState(0);
  const selectedCar = useSelector((state) => state.config.selectedCar);
  const activeStep = useSelector((state) => state.config.activeStep);
  const [oneStep, setOneStep] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef();
  const [carX, setCarX] = useState(null);
  const carAnimation = {
    initial: {},
    animate: { x: carX },
    transition: { duration: 0.5 },
  };

  useEffect(() => {
    setContainerWidth(containerRef.current.offsetWidth);
    setOneStep(containerWidth / 5);
  }, [containerWidth]);

  useEffect(() => {
    switch (activeStep) {
      case 1:
        setCarX(0);
        break;
      case 2:
        setCarX(oneStep);
        break;
      case 3:
        setCarX(oneStep * 2);
        break;
      case 4:
        setCarX(oneStep * 3);
        break;
      default:
        break;
    }
  }, [activeStep, oneStep]);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current.offsetWidth) return;
      setContainerWidth(containerRef.current.offsetWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Container ref={containerRef}>
      <CarHolder
        variants={carAnimation}
        initial="initial"
        animate="animate"
        transition="transition"
      >
        <Car src={carImage} />
      </CarHolder>
      <BuildingHolder>
        <Building src={buildingImage} />
      </BuildingHolder>
    </Container>
  );
};

export default AnimationScene;
