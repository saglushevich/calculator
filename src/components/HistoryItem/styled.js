import styled from "styled-components";

export const Item = styled.li`
  text-align: left;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.fourth};
  list-style-type: none;
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-bottom: 25px;
  }
`;
