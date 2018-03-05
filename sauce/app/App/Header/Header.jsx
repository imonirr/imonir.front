import React from 'react';

import { Row } from 'styled/Responsive';
import Container from 'styled/Container';
import Nav from './Nav/Nav';
import SocialNav from './SocialNav/SocialNav';
// import Logo from './Logo/Logo';
// import SocialIcon from './SocialIcon/SocialIcon';
// import {
//   NavRow,
//   SocialRow,
//   SocialLinks,
// } from './Header.styled';

        // <SocialLinks>

        //   <SocialIcon type="twitter" />
        //   <SocialIcon type="github" />
        //   <SocialIcon type="stackoverflow" />
        // </SocialLinks>

const Header = () =>
  (
    <Container>
      <Row justify="flex-end">
        <SocialNav />
      </Row>
      <Row justify="flex-start">
        <Nav />
      </Row>
    </Container>
  );

export default Header;
