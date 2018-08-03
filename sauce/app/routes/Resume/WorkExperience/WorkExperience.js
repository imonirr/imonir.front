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
  List,
} from '../Resume.styled';
import {
  EXPERIENCES,
} from './workExperience.constants';

class WorkExperience extends PureComponent {
  render() {
    return (
      <Fragment>
        <Row>
          <Column>
            <Heading>Employment</Heading>
          </Column>
        </Row>
        {
          EXPERIENCES.map(experience => (
            <SectionRow key={experience.key}>
              <SectionLeftCol>
                <SubHeading>{experience.duration}</SubHeading>
              </SectionLeftCol>
              <SectionRightCol>
                <SubHeading>
                  {experience.position}<br />
                  {experience.company}
                </SubHeading>

                <List>
                  {
                    experience.bullets.map(bullet => (
                      <li key={bullet.key}>{bullet.point}</li>
                    ))
                  }
                </List>
              </SectionRightCol>
            </SectionRow>
          ))
        }
      </Fragment>
    );
  }
}


export default WorkExperience;
