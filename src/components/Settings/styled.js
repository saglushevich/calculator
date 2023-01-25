import styled from "styled-components";

export const SettingsContainer = styled.div`
  padding: ${({ theme }) => `${theme.gaps["4xl"]} ${theme.gaps["5xl"]}`};
`;

export const SettingsTitle = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  color: ${({ theme }) => theme.colors.fourth};
`;

export const SettingsContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.first};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100px;
`;

export const SettingsDropdawn = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${SettingsContent} {
    display: block;
  }
  cursor: pointer;
  margin-top: ${({ theme }) => theme.gaps["2xl"]};
`;

export const SettingsSelected = styled.div`
  width: 300px;
  background-color: transparent;
  border: ${({ theme }) =>
    `${theme.borderSizes.xs} solid ${theme.colors.second}`};
  border-radius: ${({ theme }) => theme.borderSizes.s};
  color: ${({ theme }) => theme.colors.fourth};
  padding: ${({ theme }) => theme.gaps.l};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-top: ${({ theme }) => theme.gaps.xs};
`;

export const SettingsItem = styled.div`
  display: block;
  border: ${({ theme }) =>
    `${theme.borderSizes.xs} solid ${theme.colors.second}`};
  width: 300px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps.l}`};
  color: ${({ theme }) => theme.colors.fourth};
  &:nth-last-child(1) {
    border-radius: ${({ theme }) =>
      `0 0 ${theme.borderSizes.s} ${theme.borderSizes.s}`};
  }
`;

export const SettingsSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.fourth};
`;

export const SettingsButton = styled.button`
  text-align: left;
  width: 300px;
  display: block;
  background-color: ${({ theme }) => theme.colors.first};
  border: ${({ theme }) =>
    `${theme.borderSizes.xs} solid ${theme.colors.second}`};
  border-radius: ${({ theme }) => theme.borderSizes.s};
  font-size: ${({ theme }) => theme.fontSizes.xl}};
  color: ${({ theme }) => theme.colors.fourth};
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.l}`};
  margin-top: ${({ theme }) => theme.gaps.l};
  cursor: pointer;
`;
