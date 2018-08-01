import styled from 'styled-components';

// import { media } from 'ui/theme';
import { media } from 'styled/utils';
import Container from 'styled/Container';
import {
  Row,
  Column,
} from 'styled/Responsive';


export const ResumePage = styled(Container)`
  max-width: 106.3rem;
  padding: 5.5rem;
  background-color: white;
  font-family: calibri;
  font-size: 1.6rem;
  color: #111;
`;
export const ContactInfo = styled(Column)`
  text-align: right;
  margin-top: 2em;
`;

export const DownloadLink = styled.a`
  font-size: 2rem;
`;
export const Name = styled.h1`
`;
export const Role = styled.h4``;

export const Sumary = styled.p``;

export const Section = styled.div`
  margin: 3em 0 1.6em 0;
`;
export const Summary = styled.p`

`;


export const Heading = styled.h2`
  font-family: arial;
  color: rgb(2, 26, 113);
  border-bottom: 2px solid #111;
`;
export const SubHeading = styled.span`
  font-family: arial;
  font-weight: bold;
  font-size: 1.8rem;
`;
export const SectionRow = styled(Row)`
  margin: 1.6rem 0;
  flex-wrap: wrap;
  ${media.tablet`
    flex-wrap: 'nowrap';
  `};
`;
export const SectionLeftCol = styled(Column)`
  width: 100%;
  ${media.tablet`
    width: 20%;
  `};
`;
export const SectionRightCol = styled(Column)`
  width: 100%;
  ${media.tablet`
    width: 80%;
  `};
`;
export const List = styled.ul`
  margin: 3.2rem 0 3.2rem 3.2rem;
`;
