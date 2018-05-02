import React, { PureComponent } from 'react';


import Container from 'styled/Container';
import {
  Row,
  Column2,
} from 'styled/Responsive';


import {
  Pic,
} from './WhatIDo.styled';
// const pic = require('./images/pic.jpg');
import ProjectList from './ProjectList/ProjectList';
import {
  PROJECTS,
} from './WhatIDo.constants';


class WhatIDo extends PureComponent {
  constructor(props) {
    super(props);
    const todate = new Date();
    this.state = {
      years: todate.getFullYear() - 2011,
      projects: PROJECTS,
    };
  }
  render() {
    return (
      <Container>
        <Row wrap="wrap">
          <Column2 order={2}>
            <p>
              Hi there.
            </p>

            <p>
              I am <strong>Moniuzzaman Monir.</strong><br />
              A full stack Developer.<br />
              I have been working for {this.state.years}+ years.<br /><br />
              <em>Favorite stack: </em>
              Frontend(React), Backend(Django/Nodejs) to Deployment with Docker containers.
            </p>
          </Column2>
          <Column2>
            <Pic alt="" src="/static/images/pic.jpg" />
          </Column2>
        </Row>

        <h3>Some of my recent works</h3>
        <ProjectList projects={this.state.projects} />

      </Container>
    );
  }
}


export default WhatIDo;
