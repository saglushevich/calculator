import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.gaps.l};
  background-color: ${({ theme }) => theme.colors.third};
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.fifth};
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavigationItem = styled(NavLink)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.fifth};
  opacity: 0.7;
  margin-left: ${({ theme }) => theme.gaps.xl};
  cursor: pointer;
  &.active {
    opacity: 1;
  }
  &.active:after {
    content: "";
    position: absolute;
    bottom: ${({ theme }) => `-${theme.gaps.s}`};
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.fifth};
  }
`;
