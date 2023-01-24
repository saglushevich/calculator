import styled from "styled-components";

export const HistoryContainer = styled.div`
  padding: ${({ theme }) => `${theme.xm}px ${theme.xxxl}px 0`};
  width: 400px;
  height: 400px;
  border-left: 2px solid ${({ theme }) => theme.second};
`;

export const HistoryTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.xxl + "px"};
  color: ${({ theme }) => theme.fourth};
`;

export const HistoryItems = styled.ul`
  height: 80%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: ${({ theme }) => theme.xxl + "px"};
`;
