import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Img from 'styledComponents/Img';
// import Anchor from 'styledComponents/Anchor';
import LogoWrapper from 'styledComponents/LogoWrapper';

const logo = require('./Logo.png');

const LogoImg = styled(Img)`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

const Logo = () =>
  (
    <LogoWrapper>
      <Link to="/">
        <LogoImg src={logo} />
      </Link>
    </LogoWrapper>
  );

export default Logo;
