import ROUTES from "@constants/routes";

import { HeaderContainer, Logo, Navigation, NavigationItem } from "./styled";

function Header() {
  return (
    <HeaderContainer>
      <Logo>Calculator App</Logo>
      <Navigation>
        <NavigationItem to={ROUTES.FUNCTION_CALC}>Home (FC)</NavigationItem>
        <NavigationItem to={ROUTES.CLASS_CALC}>Home (CC)</NavigationItem>
        <NavigationItem to={ROUTES.SETTINGS}>Settings</NavigationItem>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
