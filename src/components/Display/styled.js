import styled from "styled-components";

export const DisplayContainer = styled.div`
  padding: ${({ theme }) => `${theme.xs}px ${theme.xl}px`};
  border-bottom: 2px solid ${({ theme }) => theme.second};
`;

export const InputValue = styled.div`
  font-size: ${({ theme }) => theme.xxxl + "px"};
  color: ${({ theme }) => theme.fourth};
  text-align: right;
`;

export const Expression = styled(InputValue)`
  font-size: ${({ theme }) => theme.xl + "px"};
`;

export const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.xl + "px"};
  color: ${({ theme }) => theme.sixth};
  text-align: right;
`;
