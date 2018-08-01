import React, { PureComponent } from 'react';

import {
  Row,
  Column,
} from 'styled/Responsive';

import {
  // ContactInfo,
  Section,
  Name,
  ResumePage,
  Role,
  Summary,
  DownloadLink,
} from './Resume.styled';
import Tools from './Tools/Tools';
import WorkExperience from './WorkExperience/WorkExperience';
import Education from './Education/Education';

class Resume extends PureComponent {
  render() {
    const resumeDownloadLink = 'https://docs.google.com/document/d/1aUbFQaS0sMzlcmENYWxa0ur2etX0mpqNffozIb2QLFQ/export?format=pdf';


    return (
      <ResumePage>
        <Row justify="flex-end">
          <DownloadLink href={resumeDownloadLink}>Download</DownloadLink>
        </Row>
        <Row wrap="wrap" mb={4}>
          <Column>
            <Name>Md Moniruzzaman Monir</Name>
            <Role>Full Stack Developer</Role>
          </Column>
          {/*
          <ContactInfo>
            <em>Dhaka, Bangladesh</em><br />
            <em>+880 1716-108114</em><br />
            <a href="mailto:imonir.com@gmail.com">imonir.com@gmail.com</a>
          </ContactInfo>
          */}
        </Row>
        <Row>
          <Column>
            <Summary>
              Carefully analyzing requirement and delivery of pixel perfect Application on time
              is what i learned over the years.<br />
              I focus on meeting requirements which fulfil business goal.
            </Summary>
          </Column>
        </Row>

        <Section>
          <WorkExperience />
        </Section>

        <Section>
          <Education />
        </Section>

        <Section>
          <Tools />
        </Section>


      </ResumePage>
    );
  }
}


export default Resume;
