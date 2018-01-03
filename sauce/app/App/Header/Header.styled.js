import styled from 'styled-components';
import { Box } from 'grid-styled';

import { Row } from 'styled/Responsive';

export const NavBar = styled(Box)`
  font-family: "DinnCondensed";
`;

export const HeaderContainer = styled(Row)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0px 10px 0px;
  align-items: flex-end;
  border-bottom: 1px solid #e6e6e6;
`;

export const SocialLinks = styled.ul`
  list-style: none;
  margin: 0px 20px;
  float: right;
`;
