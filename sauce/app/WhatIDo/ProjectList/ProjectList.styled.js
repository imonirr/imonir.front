import styled from 'styled-components';
import { media } from 'styled/utils';
// import { media } from 'ui/theme';
import {
  Row,
} from 'styled/Responsive';


// const pic = require('./images/pic.jpg');
export const Pic = styled.img`
  width: 30rem;
`;
export const Project = styled(Row)`
  border-bottom: 1px dotted #cecece;
  box-shadow: 0 0.1rem 0.4rem rgba(0,0,0,.15);
  background-color: #fff;
`;
export const When = styled.p`
  margin-bottom: 0.5em;
  color: #555;

  ${media.handheld`
    font-size: 1.4rem;
  `};
`;
export const ProjectTitle = styled.h4`
  margin-bottom: 0.2em;
`;
export const DownArrow = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  align-self: center;
  cursor: pointer;
`;
