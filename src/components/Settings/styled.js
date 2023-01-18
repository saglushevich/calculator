import styled from "styled-components";

export const SettingsContainer = styled.div`
  padding: 60px 80px;
`;

export const SettingsTitle = styled.div`
  text-align: left;
  font-size: 64px;
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
  margin-top: 40px;
`;

export const SettingsSelected = styled.div`
  width: 300px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.second};
  border-radius: 8px;
  color: ${({ theme }) => theme.fourth};
  padding: 20px 25px;
  font-size: 26px;
  margin-top: 5px;
`;

export const SettingsItem = styled.div`
  display: block;
  border: 2px solid ${({ theme }) => theme.second};
  width: 300px;
  font-size: 28px;
  padding: 7px 25px;
  color: ${({ theme }) => theme.fourth};
  &:nth-last-child(1) {
    border-radius: 0px 0px 8px 8px;
  }
`;

export const SettingsSubtitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.fourth};
`;

export const SettingsButton = styled.button`
  text-align: left;
  width: 300px;
  display: block;
  background-color: ${({ theme }) => theme.first};
  border: 2px solid ${({ theme }) => theme.second};
  border-radius: 8px;
  font-size: 28px;
  color: ${({ theme }) => theme.fourth};
  padding: 20px 25px;
  margin-top: 25px;
  cursor: pointer;
`;
