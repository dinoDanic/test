import styled from "styled-components";

export const Container = styled.div``;

export const ServiceItem = styled.div`
  min-width: 200px;
`;

export const Services = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
