import styled from "styled-components";

export const ControlPanelContainer = styled.div`
  padding: 35px 50px;
  display: flex;
  justify-content: center;
`;

export const ControlPanelButton = styled.button`
  display: block;
  width: 200px;
  height: 55px;
  background-color: ${({ theme }) => theme.third};
  border: 2px solid ${({ theme }) => theme.second};
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.fifth};
  font-size: 20px;
`;
