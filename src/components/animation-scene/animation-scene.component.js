import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Car,
  CarHolder,
  BuildingHolder,
  Building,
  ContainerHold,
} from "./animation-scene.styles";

import carImage from "../../img/car.svg";
import buildingImage from "../../img/building.svg";
import ErrorMessage from "./error-message/error-message.component";

const AnimationScene = () => {
  const activeStep = useSelector((state) => state.config.activeStep);
  const [oneStep, setOneStep] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const [carOpacita, setCarOpacita] = useState(1);
  const containerRef = useRef();
  const [carX, setCarX] = useState(null);

  const carAnimation = {
    initial: {},
    animate: { x: carX, opacity: carOpacita, transition: { duration: 1 } },
  };

  useEffect(() => {
    setContainerWidth(containerRef.current.offsetWidth);
    let step = containerWidth / 4;
    setOneStep(step);
  }, [containerWidth]);

  useEffect(() => {
    switch (activeStep) {
      case 1:
        setCarX(0);
        setCarOpacita(1);
        break;
      case 2:
        setCarX(oneStep);
        setCarOpacita(1);
        break;
      case 3:
        setCarX(oneStep * 2);
        setCarOpacita(1);
        break;
      case 4:
        setCarX(oneStep * 3);
        setCarOpacita(1);
        break;
      case 5:
        setCarX(oneStep * 4 - 80);
        setCarOpacita([1, 1, 1, 0]);
        break;
      default:
        break;
    }
  }, [activeStep, oneStep]);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.offsetWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <ContainerHold ref={containerRef}>
        <CarHolder
          variants={carAnimation}
          initial="initial"
          animate="animate"
          transition="transition"
        >
          <ErrorMessage />
          <Car src={carImage} />
        </CarHolder>
        <BuildingHolder>
          <Building src={buildingImage} />
        </BuildingHolder>
      </ContainerHold>
    </Container>
  );
};

export default AnimationScene;
