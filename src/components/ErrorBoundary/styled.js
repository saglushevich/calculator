import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.xxl + "px"};
  color: ${({ theme }) => theme.fourth};
  text-align: center;
  margin-top: ${({ theme }) => `${theme.xxxl * 4}px`};
`;

export default ErrorMessage;
