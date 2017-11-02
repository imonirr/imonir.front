import React from 'react';
import styled from 'styled-components';

import Img from 'styledComponents/Img';
import Anchor from 'styledComponents/Anchor';
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
      <Anchor>
        <LogoImg src={logo} />
      </Anchor>
    </LogoWrapper>
  );

export default Logo;
