import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 15px 0;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: #009688;
  }
`;

const Header = () => (
  <Nav>
    <NavList>
      <NavItem><NavLink href="#home">Início</NavLink></NavItem>
      <NavItem><NavLink href="#about">Sobre</NavLink></NavItem> {/* Corrigi o link para "Sobre" */}
      <NavItem><NavLink href="#services">Serviços</NavLink></NavItem>
      <NavItem><NavLink href="#contact">Contato</NavLink></NavItem>
    </NavList>
  </Nav>
);

export default Header;
