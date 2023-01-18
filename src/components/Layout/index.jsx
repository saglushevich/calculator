import PropTypes from "prop-types";

import Header from "@components/Header";

import LayoutContainer from "./styled";

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
