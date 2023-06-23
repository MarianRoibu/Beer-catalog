import React from "react";
import styled from "styled-components";



const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d3d6db; 
  height: 50px; 
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin-left: 4vh;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-top: 0;
  
  @media (max-width: 768px) {
    margin-top: 5vh;
    & > :first-child {
      margin-right: -15vh;
    }
  }

  & > :last-child {
    margin-top: 0.2vh;
    margin-right: 2vh;
  }
`;

const NavLink = styled.li`
  font-size: 1.5rem;
  margin-right: 2vh;
  &:first-child {
    margin-right: 20vh;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    position: relative;

    &:hover {
      color: #dcddde;
    }
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #9147ff;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 480px) {
    max-height: 5vh;
    margin-right: 7.4vh;
  }

  &:hover {
    background-color: #7339b2;
  }
`;


const Navbar = () => {


  return (
    <>
    <NavbarContainer>
      <Logo href="/">Home</Logo>
      <NavLinks>
      </NavLinks>
    </NavbarContainer>
    </>
  );
};

export default Navbar;