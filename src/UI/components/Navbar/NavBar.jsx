import React from "react";
import { GlobalStyles, Button, NavLink, NavLinks, Logo, NavbarContainer, } from "../../Styles/ComponentsStyles/NavbarStyle";

const Navbar = () => {


  return (
    <>
      <GlobalStyles /> 
      <NavbarContainer style={{ margin: 0 }}>
        <NavLinks>
        </NavLinks>
      </NavbarContainer>
    </>
  );
};

export default Navbar;