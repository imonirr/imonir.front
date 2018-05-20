import React, { PureComponent } from 'react';
import styled from 'styled-components';

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


const EmText = styled.em`
  color: #3d3d3d;
  font-weight: bold;
  text-decoration: underline;
`;


class WhatIDo extends PureComponent {
  constructor(props) {
    super(props);
    const todate = new Date();
    this.state = {
      years: todate.getFullYear() - 2011 - 1,
      projects: PROJECTS,
    };
  }
  render() {
    return (
      <Container>
        <Row wrap="wrap" mb={4}>
          <Column2 order={2}>
            <p>
              Hi there.
            </p>

            <div>
              <p>
                I am <strong>Moniuzzaman Monir.</strong><br />
                Fullstack Developer.<br />
                I have been working for {this.state.years}+ years.<br /><br />
              </p>
              <h5>Favorite stack</h5>
              <p>
                <EmText>Frontend</EmText>: React, Redux, Webpack + goodies(Eslint, Nextjs ...).<br />
                <EmText>Backend</EmText>: Django/Nodejs.<br />
                <EmText>My SwissArmyKnife</EmText>: Docker, Vim, Linux, Gitlab/Github ...
              </p>
            </div>
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
