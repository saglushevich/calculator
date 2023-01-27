import styled from "styled-components";

export const ControlPanelContainer = styled.div`
  padding: ${({ theme }) => `${theme.gaps.xl} ${theme.gaps["2xl"]}`};
  display: flex;
  justify-content: center;
`;

export const ControlPanelButton = styled.button`
  display: block;
  width: 180px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.third};
  border: ${({ theme }) =>
    `${theme.borderSizes.xs} solid ${theme.colors.second}`};
  border-radius: ${({ theme }) => theme.borderSizes.s};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fifth};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
