import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #e25a5e;
  text-decoration: none;
  text-shadow: #8b181c 1px -1px 0px;
  display: inline-block;
  margin: 0 20px;
  float: right;
  -webkit-transition-property: color;
  -moz-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  transition-duration: 0.3s;
  &.selected: {
    color: white;
  }
`;

export default StyledLink;
