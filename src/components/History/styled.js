import styled from "styled-components";

export const HistoryContainer = styled.div`
  padding: 15px 40px 0;
  width: 400px;
  height: 400px;
  border-left: 2px solid ${({ theme }) => theme.colors.second};
`;

export const HistoryTitle = styled.div`
  text-align: center;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.fourth};
`;

export const HistoryItems = styled.ul`
  height: 80%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 30px;
`;
