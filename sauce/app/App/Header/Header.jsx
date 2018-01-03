import React from 'react';

import Container from 'styled/Container';
import Nav from './Nav/Nav';
import Logo from './Logo/Logo';
import SocialIcon from './SocialIcon/SocialIcon';
import {
  NavBar,
  HeaderContainer,
  SocialLinks,
} from './Header.styled';


const Header = () =>
  (
    <NavBar>
      <Container>
        <SocialLinks>
          <SocialIcon type="twitter" />
          <SocialIcon type="github" />
          <SocialIcon type="stackoverflow" />
        </SocialLinks>
      </Container>
      <HeaderContainer w={1}>
        <Logo />
        <Nav />
      </HeaderContainer>
    </NavBar>
  );

export default Header;
