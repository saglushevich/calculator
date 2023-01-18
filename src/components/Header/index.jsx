import { ROUTES } from "@constants";

import { HeaderContainer, Logo, Navigation, NavigationItem } from "./styled";

function Header() {
  return (
    <HeaderContainer>
      <Logo>Calculator App</Logo>
      <Navigation>
        <NavigationItem to={ROUTES.functionCalc}>Home (FC)</NavigationItem>
        <NavigationItem to={ROUTES.classCalc}>Home (CC)</NavigationItem>
        <NavigationItem to={ROUTES.settings}>Settings</NavigationItem>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
