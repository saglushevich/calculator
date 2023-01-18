import styled from "styled-components";

export const DisplayContainer = styled.div`
  padding: 10px 25px;
  border-bottom: 2px solid ${({ theme }) => theme.second};
`;

export const InputValue = styled.div`
  font-size: 44px;
  color: ${({ theme }) => theme.fourth};
  text-align: right;
`;

export const Expression = styled(InputValue)`
  font-size: 26px;
`;

export const ErrorMessage = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.sixth};
  text-align: right;
`;
