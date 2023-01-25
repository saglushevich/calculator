import styled from "styled-components";

const Item = styled.li`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.fourth};
  list-style-type: none;
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.m};
  }
`;

export default Item;
