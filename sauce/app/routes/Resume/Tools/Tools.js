import React, { PureComponent, Fragment } from 'react';

import {
  Row,
  Column,
} from 'styled/Responsive';
import {
  Heading,
  List,
} from '../Resume.styled';

class Tools extends PureComponent {
  render() {
    return (
      <Fragment>
        <Row>
          <Column>
            <Heading>Preferred Tools and Technologies</Heading>
          </Column>
        </Row>
        <Row wrap="wrap">
          <Column>
            <List>
              <li>
                <strong>Trello</strong> for task management
              </li>
              <li>
                <strong>Slack</strong> for communication
              </li>
              <li>
                <strong>Git</strong> Version control system
              </li>
            </List>
          </Column>
          <Column>
            <List>
              <li>
                <strong>Frontend</strong>: ReactJS, Redux, Webpack + goodies(Eslint, NextJS ...).
              </li>
              <li>
                <strong>Backend</strong>: NodeJS/Django, PostgreSQL.
              </li>
              <li>
                <strong>Others</strong>: Docker, Vim, Linux, Python, Bash etc.
              </li>
            </List>
          </Column>
        </Row>
      </Fragment>
    );
  }
}


export default Tools;
