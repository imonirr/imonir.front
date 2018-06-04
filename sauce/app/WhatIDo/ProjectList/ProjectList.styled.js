import styled from 'styled-components';
import { media } from 'styled/utils';
import {
  Row,
} from 'styled/Responsive';


// const pic = require('./images/pic.jpg');
export const Pic = styled.img`
  width: 30rem;
`;
export const Project = styled(Row)`
  border-bottom: 1px dotted #cecece;
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
