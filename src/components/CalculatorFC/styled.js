import styled from "styled-components";

export const CalculatorContainer = styled.div`
  padding: ${({ theme }) => `${theme.xl}px ${theme.xxl}px`};
  display: flex;
  justify-content: center;
`;

export const CalculatorInnerContainer = styled.div`
  display: block;
  padding: 0 ${({ theme }) => theme.xxl + "px"};
`;
