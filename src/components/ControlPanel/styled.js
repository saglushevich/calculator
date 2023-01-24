import styled from "styled-components";

export const ControlPanelContainer = styled.div`
  padding: ${({ theme }) => `${theme.xxl}px ${theme.xxxl}px`};
  display: flex;
  justify-content: center;
`;

export const ControlPanelButton = styled.button`
  display: block;
  width: 180px;
  height: 50px;
  background-color: ${({ theme }) => theme.third};
  border: 2px solid ${({ theme }) => theme.second};
  border-radius: ${({ theme }) => theme.xs + "px"};
  cursor: pointer;
  color: ${({ theme }) => theme.fifth};
  font-size: ${({ theme }) => theme.xm + "px"};
`;
