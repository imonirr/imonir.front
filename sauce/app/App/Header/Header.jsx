import React from 'react';
import styled from 'styled-components';

import Container from 'styledComponents/Container';

import Nav from './Nav/Nav';
import Logo from './Logo/Logo';


const NavBar = styled.div`
    font-family: "DinnCondensed";
    z-index: 30;
    text-align: center;
    background: #a11c20;
    display: block;
    margin: 20px auto;
`;

const Header = () =>
  (
    <NavBar>
      <Container>
        <Logo />
        <Nav />
      </Container>
    </NavBar>
  );

export default Header;
