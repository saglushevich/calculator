import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue";
        text-decoration: none;
    } 

    body {
        background-color: ${({ theme }) => theme.colors.seventh};
    }
`;
