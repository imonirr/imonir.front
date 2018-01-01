import React from 'react';
import styled from 'styled-components';

import { Navigation } from 'styled/StyledLink';

const LogoWrapper = styled.div`
  margin-right: auto;
`;
const LogoLink = styled(Navigation)`
  font-size: 34px;
`;

const Logo = () =>
  (
    <LogoWrapper>
      <LogoLink to="/">
        Monir
      </LogoLink>
    </LogoWrapper>
  );

export default Logo;
