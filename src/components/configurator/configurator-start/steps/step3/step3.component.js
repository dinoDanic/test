import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../../../../theme/ui-components/input/input.component";
import Textarea from "../../../../../theme/ui-components/text-area/text-area.component";
import Button from "../../../../../theme/ui-components/button/button.component";

import {
  Container,
  Form,
  FormHolder,
  Left,
  Right,
  Buttons,
} from "./step3.styles";

import { setUser } from "../../../../../redux/user/user.actions";
import {
  setErrorMessage,
  setSteps,
} from "../../../../../redux/config/config.actions";

const Step3 = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [buttonValidation, setButtonValidation] = useState(false);
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    number: user.number,
    message: user.message,
  });

  useEffect(() => {
    if (!userData.name || !userData.email.includes("@") || !userData.number) {
      setButtonValidation(false);
    } else {
      setButtonValidation(true);
    }
  }, [userData]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!buttonValidation) {
      dispatch(setErrorMessage("Polja pod * su obavezna"));
    } else {
      dispatch(setErrorMessage(null));
      dispatch(setUser(userData));
      dispatch(setSteps(4));
    }
  };
  const handleBack = () => {
    dispatch(setSteps(2));
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleNext(e)}>
        <FormHolder>
          <Left>
            <Input
              name="name"
              value={userData.name}
              placeholder="Ime i prezime*"
              onChange={(e) => handleChange(e)}
            />
            <Input
              name="number"
              value={userData.number}
              placeholder="Broj telefona*"
              onChange={(e) => handleChange(e)}
            />
          </Left>
          <Right>
            <Input
              name="email"
              type="email"
              placeholder="Email adresa*"
              value={userData.email}
              onChange={(e) => handleChange(e)}
            />
            <Textarea
              name="message"
              value={userData.message}
              placeholder="Napomena (opcionalno)"
              onChange={(e) => handleChange(e)}
            />
          </Right>
        </FormHolder>
        <Buttons>
          <Button type="button" onClick={handleBack}>
            Nazad
          </Button>
          <Button type="submit" valid={buttonValidation}>
            Dalje
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
};

export default Step3;
