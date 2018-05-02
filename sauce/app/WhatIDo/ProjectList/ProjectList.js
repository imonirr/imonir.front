import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';


import {
  Column,
  Column2,
} from 'styled/Responsive';
import {
  Pic,
  Project,
  ProjectTitle,
} from './ProjectList.styled';
// const pic = require('./images/pic.jpg');

class ProjectList extends PureComponent {
  constructor(props) {
    super(props);
    const todate = new Date();

    this.state = {
      years: todate.getFullYear() - 2011,
    };
  }
  render() {
    return (
      <Fragment>
        {
          this.props.projects.map(project => (
            <Project key={project.key} wrap="wrap" my={1} py={2}>
              <Column2>
                <ProjectTitle><a href={project.title.link}>{project.title.text}</a></ProjectTitle>
                {
                  project.skills.map(skill => (
                    <em>{skill} </em>
                  ))
                }
                <p>{project.title.time}</p>
              </Column2>
              <Column2 justify="flex-end">
                <Pic src={project.image} />
              </Column2>
              <Column>{project.description}</Column>
            </Project>
          ))
        }
      </Fragment>

    );
  }
}
ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
