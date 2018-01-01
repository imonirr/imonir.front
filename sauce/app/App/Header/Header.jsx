import React from 'react';

import { Row } from 'styled/Responsive';
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
      <Row>
        <SocialLinks>
          <SocialIcon type="twitter" />
          <SocialIcon type="github" />
          <SocialIcon type="stackoverflow" />
        </SocialLinks>
      </Row>
      <HeaderContainer w={1}>
        <Logo />
        <Nav />
      </HeaderContainer>
    </NavBar>
  );

export default Header;
