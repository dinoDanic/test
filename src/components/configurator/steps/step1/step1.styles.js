import styled from "styled-components";

export const Container = styled.div``;

export const CarHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

export const CarItem = styled.div`
  min-width: 200px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Error = styled.div`
  padding: ${(props) => props.theme.spacing.padding.md};
  border: 1px solid #eee;
  background-color: ${(props) => props.theme.colors.ui.gray};
  border-radius: ${(props) => props.theme.spacing.border.md};
  color: ${(props) => props.theme.colors.ui.danger};
  font-size: 1rem;
  font-weight: 300;
  margin: 20px 0;
`;
