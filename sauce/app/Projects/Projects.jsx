import React from 'react';
import styled from 'styled-components';

import { StyledLink } from 'styled/StyledLink';
import Container from 'styled/Container';

const ProjectTitle = styled.h6`
  margin-bottom: .4rem;
  color: ${props => props.theme.colors.primary};
`;
const Detail = styled.p``;

const Projects = () =>
  (
    <Container>
      <h4>Projects</h4>
      <ProjectTitle>
        <StyledLink href="https://shikhai.live">Shikhai.live</StyledLink>
      </ProjectTitle>
      <Detail>
        Interactive Live oniline tutoring, mentoring
      </Detail>
    </Container>
  );

export default Projects;
