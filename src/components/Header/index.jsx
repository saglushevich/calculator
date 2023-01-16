import { HeaderContainer, Logo, Navigation, NavigationItem } from "./styled";

function Header() {
  return (
    <HeaderContainer>
      <Logo>Calculator App</Logo>
      <Navigation>
        <NavigationItem to="/">Home (FC)</NavigationItem>
        <NavigationItem to="/classes">Home (CC)</NavigationItem>
        <NavigationItem to="/settings">Settings</NavigationItem>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
