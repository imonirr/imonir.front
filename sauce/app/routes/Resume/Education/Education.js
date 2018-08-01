import React, { PureComponent, Fragment } from 'react';

import {
  Row,
  Column,
} from 'styled/Responsive';
import {
  SectionRow,
  SectionRightCol,
  SectionLeftCol,
  Heading,
  SubHeading,
} from '../Resume.styled';

class Education extends PureComponent {
  render() {
    return (
      <Fragment>
        <Row>
          <Column>
            <Heading>Education</Heading>
          </Column>
        </Row>
        <SectionRow>
          <SectionLeftCol>
            <SubHeading>2011</SubHeading>
          </SectionLeftCol>
          <SectionRightCol>
            <SubHeading>Bachelor of Science</SubHeading>: Computer Science<br />
            Rajshahi University of Engineering and Technology<br />
            Rajshahi, Bangladesh
          </SectionRightCol>
        </SectionRow>
      </Fragment>
    );
  }
}


export default Education;
