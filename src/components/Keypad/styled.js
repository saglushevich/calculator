import styled from "styled-components";

const KeypadContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 80px);
  grid-template-rows: repeat(4, 80px);
  column-gap: ${({ theme }) => theme.gaps["2xl"]};
  row-gap: ${({ theme }) => theme.gaps.m};
  padding: ${({ theme }) => `${theme.gaps["3xl"]} ${theme.gaps["3xl"]} 0`};
`;

export default KeypadContainer;
