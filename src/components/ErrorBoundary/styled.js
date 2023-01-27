import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.fourth};
  text-align: center;
  margin-top: ${({ theme }) => theme.gaps["7xl"]};
`;

export default ErrorMessage;
