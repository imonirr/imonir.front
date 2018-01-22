import styled from 'styled-components';
import { Box } from 'grid-styled';

import { Row } from 'styled/Responsive';
import Container from 'styled/Container';

export const SocialRow = styled(Row)`
  aligh-items: flex-end;
`;

export const NavRow = styled(Row)`
  align-items: flex-start;
`;

  // max-width: 1280px;
  // margin: 0 auto;
  // padding: 40px 0px 10px 0px;

export const SocialLinks = styled.ul`
  list-style: none;
  margin-left: auto;
`;
