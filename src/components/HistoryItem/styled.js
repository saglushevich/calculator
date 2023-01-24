import styled from "styled-components";

const Item = styled.li`
  text-align: left;
  font-size: ${({ theme }) => theme.xl + "px"};
  color: ${({ theme }) => theme.fourth};
  list-style-type: none;
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.xl + "px"};
  }
`;

export default Item;
