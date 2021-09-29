import styled from "styled-components";

export const Container = styled.div``;
export const ServicesHold = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Section = styled.div`
  flex: 1;
  border: 1px solid ${(props) => props.theme.colors.ui.darkGray};
  padding: ${(props) => props.theme.spacing.padding.ml};
  border-radius: ${(props) => props.theme.spacing.border.md};
  min-width: 200px;
`;
export const Services = styled.div`
  flex: 1;
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  text-transform: uppercase;
  margin-right: 10px;
`;
export const SelectedCar = styled.div`
  font-weight: 400;
`;

export const UserHold = styled.div`
  margin-top: 20px;
`;

export const UserInfoHold = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
export const Col = styled.div`
  flex: 1;
  min-width: 200px;
  &:last-child {
    padding-left: 20px;
    @media (${(props) => props.theme.spacing.mobile.sm}) {
      padding-left: 0;
    }
  }
`;
export const UserInfo = styled.div``;
export const UserText = styled.div`
  font-weight: 400;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
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
