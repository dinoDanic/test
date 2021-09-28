import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSteps } from "../../../../../redux/config/config.actions";

import {
  Container,
  ServicesHold,
  Head,
  Title,
  SelectedCar,
  Section,
  UserHold,
  Col,
  UserInfo,
  UserInfoHold,
  UserText,
  Row,
  Buttons,
} from "./step4.styles";

import Button from "../../../../../theme/ui-components/button/button.component";
import SelectedServices from "./selected-services/selected-services.component";

const Step4 = () => {
  const selectedCar = useSelector((state) => state.config.selectedCar);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCarEdit = () => {
    dispatch(setSteps(1));
  };

  const handleServiceEdit = () => {
    dispatch(setSteps(2));
  };

  const handleUserEdit = () => {
    dispatch(setSteps(3));
  };

  const handleBack = () => {
    dispatch(setSteps(4));
  };

  return (
    <Container>
      <ServicesHold>
        <Section>
          <Head>
            <Title>Model Vozila</Title>
            <Button onClick={handleCarEdit}>Uredi</Button>
          </Head>
          <SelectedCar>{selectedCar}</SelectedCar>
        </Section>
        <Section>
          <Head>
            <Title>Odabrane Usluge</Title>
            <Button onClick={handleServiceEdit}>Uredi</Button>
          </Head>
          <SelectedServices />
        </Section>
      </ServicesHold>
      <UserHold>
        <Section>
          <Head>
            <Title>Kontakt Podaci</Title>
            <Button onClick={handleUserEdit}>Uredi</Button>
          </Head>
          <UserInfoHold>
            <Col>
              <Row>
                <UserText>Ime i Prezime:</UserText>
                <UserInfo>{user.name}</UserInfo>
              </Row>
              <Row>
                <UserText>Broj Telefona:</UserText>
                <UserInfo>{user.number}</UserInfo>
              </Row>
            </Col>
            <Col>
              <Row>
                <UserText>Email adresa:</UserText>
                <UserInfo>{user.email}</UserInfo>
              </Row>
              <Row>
                <UserText>Napomena:</UserText>
                <UserInfo>{user.message}</UserInfo>
              </Row>
            </Col>
          </UserInfoHold>
        </Section>
      </UserHold>
      <Buttons>
        <Button onClick={handleBack}>Nazad</Button>
        <Button>Pošalji</Button>
      </Buttons>
    </Container>
  );
};

export default Step4;
