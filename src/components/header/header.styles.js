import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const Head = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 150px;
  margin-right: 20px;
`;

export const Message = styled.div``;
