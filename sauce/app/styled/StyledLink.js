import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 12px;
  color: #0074D9;
  text-decoration: none;
  display: inline-block;
  transition-property: color;
  transition-duration: 0.3s;
  text-decoration: none;
  &:hover {
    color: #7FDBFF;
  }
`;

export const Navigation = styled(NavLink)`
  color: #e25a5e;
  text-decoration: none;
  display: inline-block;
  transition-property: color;
  transition-duration: 0.3s;
  &:hover {
    color: red;
  }
`;

export default StyledLink;
