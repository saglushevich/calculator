import styled from "styled-components";

const KeypadContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 80px);
  grid-template-rows: repeat(4, 80px);
  column-gap: 40px;
  row-gap: 20px;
  padding: 60px 50px 0px;
`;

export default KeypadContainer;
