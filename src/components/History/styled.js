import styled from "styled-components";

export const HistoryContainer = styled.div`
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps["2xl"]} 0`};
  width: 400px;
  height: 400px;
  border-left: ${({ theme }) =>
    `${theme.borderSizes.xs} solid ${theme.colors.second}`};
`;

export const HistoryTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.fourth};
`;

export const HistoryItems = styled.ul`
  height: 80%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: ${({ theme }) => theme.gaps.xl};
`;
