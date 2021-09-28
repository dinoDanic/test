import styled from "styled-components";

export const Container = styled.div``;
export const Message = styled.div`
  color: gray;
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
export const Title = styled.div`
  font-weight: 400;
  margin-bottom: 5px;
`;
export const Head = styled.div`
  margin-bottom: 40px;
`;
