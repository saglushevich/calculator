import styled from "styled-components";

export const CalculatorContainer = styled.div`
  padding: ${({ theme }) => `${theme.gaps.l} ${theme.gaps.xl}`};
  display: flex;
  justify-content: center;
`;

export const CalculatorInnerContainer = styled.div`
  display: block;
  padding: 0 ${({ theme }) => theme.gaps.xl};
`;
