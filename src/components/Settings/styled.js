import styled from "styled-components";

export const SettingsContainer = styled.div`
  padding: ${({ theme }) => `${theme.xxxl + theme.xm}px ${theme.xxxl * 2}px`};
`;

export const SettingsTitle = styled.div`
  text-align: left;
  font-size: ${({ theme }) => `${theme.xl + theme.xxxl}px`};
  color: ${({ theme }) => theme.fourth};
`;

export const SettingsContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.first};
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
  margin-top: ${({ theme }) => theme.xxxl + "px"};
`;

export const SettingsSelected = styled.div`
  width: 300px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.second};
  border-radius: ${({ theme }) => theme.xs + "px"};
  color: ${({ theme }) => theme.fourth};
  padding: ${({ theme }) => theme.xl + "px"};
  font-size: ${({ theme }) => theme.xl + "px"};
  margin-top: ${({ theme }) => theme.xxs + "px"};
`;

export const SettingsItem = styled.div`
  display: block;
  border: 2px solid ${({ theme }) => theme.second};
  width: 300px;
  font-size: ${({ theme }) => theme.xl + "px"};
  padding: ${({ theme }) => `${theme.xs}px ${theme.xl}px`};
  color: ${({ theme }) => theme.fourth};
  &:nth-last-child(1) {
    border-radius: ${({ theme }) => `0 0 ${theme.xs}px ${theme.xs}px`};
  }
`;

export const SettingsSubtitle = styled.div`
  font-size: ${({ theme }) => theme.xl + "px"};
  color: ${({ theme }) => theme.fourth};
`;

export const SettingsButton = styled.button`
  text-align: left;
  width: 300px;
  display: block;
  background-color: ${({ theme }) => theme.first};
  border: 2px solid ${({ theme }) => theme.second};
  border-radius: ${({ theme }) => `${theme.xs}px`};
  font-size: ${({ theme }) => `${theme.xl}px`};
  color: ${({ theme }) => theme.fourth};
  padding: ${({ theme }) => `${theme.xm}px ${theme.xl}px`};
  margin-top: ${({ theme }) => theme.xl + "px"};
  cursor: pointer;
`;
