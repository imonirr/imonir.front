import styled, { css } from 'styled-components';

import {
  NavList,
} from 'styled/NavList';
import {
  Anchor,
} from 'styled/Elements';

const SocialFontSize = css`
  font-size: 1.4rem;
`;


export const SocialAnchor = styled(Anchor)`
  ${SocialFontSize};
`;
export const SocialNavs = styled(NavList)`
  ${SocialFontSize};
  margin-bottom: 0.5em;
`;
