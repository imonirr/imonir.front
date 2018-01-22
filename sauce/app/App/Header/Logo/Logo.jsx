import React from 'react';
import styled from 'styled-components';
import { media } from 'ui/theme';

import { Navigation } from 'styled/StyledLink';

// const Navigation = styled(Navigation)`
// `;
  // font-size: 3.2rem;
  // ${media.tablet`font-size: 4rem;`}
  // ${media.phone`font-size: 6rem;`}

const Logo = () =>
  (
    <Navigation to="/">
      Monir
    </Navigation>
  );

export default Logo;
