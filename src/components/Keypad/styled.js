import styled from "styled-components";

const KeypadContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 80px);
  grid-template-rows: repeat(4, 80px);
  column-gap: ${({ theme }) => theme.xxxl + "px"};
  row-gap: ${({ theme }) => theme.xm + "px"};
  padding: ${({ theme }) =>
    `${theme.xxxl + theme.xm}px ${theme.xxxl + theme.xs}px 0`};
`;

export default KeypadContainer;
