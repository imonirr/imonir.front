import React, { PureComponent } from 'react';

import Container from 'styled/Container';


import ProjectList from './ProjectList/ProjectList';
import {
  PROJECTS,
} from './WhatIDo.constants';


class WhatIDo extends PureComponent {
  render() {
    return (
      <Container>
        <h3>Recent Projects</h3>
        <ProjectList projects={PROJECTS} />

      </Container>
    );
  }
}


export default WhatIDo;
