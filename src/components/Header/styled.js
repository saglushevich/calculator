import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.xl + "px"};
  background-color: ${({ theme }) => theme.third};
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.xl + "px"};
  color: ${({ theme }) => theme.fifth};
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavigationItem = styled(NavLink)`
  position: relative;
  font-size: ${({ theme }) => theme.xl + "px"};
  color: ${({ theme }) => theme.fifth};
  opacity: 0.7;
  margin-left: ${({ theme }) => theme.xxl + "px"};
  cursor: pointer;
  &.active {
    opacity: 1;
  }
  &.active:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.fifth};
  }
`;
