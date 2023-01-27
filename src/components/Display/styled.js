import styled from "styled-components";

export const DisplayContainer = styled.div`
  padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps.l}`};
  border-bottom: ${({ theme }) =>
    `${theme.borderSizes.xs} solid ${theme.colors.second}`};
`;

export const InputValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.fourth};
  text-align: right;
`;

export const Expression = styled(InputValue)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.sixth};
  text-align: right;
`;
