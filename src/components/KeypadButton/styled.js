import styled from 'styled-components'

export const Button = styled.button`
    width: 80px;
    height: 80px;
    background-color: ${({theme}) => theme.colors.first};
    border: 1px solid ${({theme}) => theme.colors.second};
    border-radius: 20px;
    cursor: pointer;
    font-size: 32px;
    color: ${({theme}) => theme.colors.fourth};
    opacity: 0.8;
    &:nth-child(12) {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    &:nth-child(6) {
        height: 180px;
    }
    &:nth-child(17) {
        height: 180px;
        position: relative;
        border-radius: 20px 20px 20px 0;
    }
    &:nth-child(17):before {
        content: "";
        position: absolute;
        bottom: -1px;
        right: 77px;
        width: 120px;
        height: 80px;
        background-color: ${({theme}) => theme.colors.first};
        border: 1px solid ${({theme}) => theme.colors.second};
        border-right: 2px solid ${({theme}) => theme.colors.first};
        border-radius: 20px 0 0 20px;
    }

`;