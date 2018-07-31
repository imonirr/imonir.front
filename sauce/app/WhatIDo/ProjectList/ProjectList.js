import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


import { StyledLink } from 'styled/StyledLink';
// import NiceDate from 'components/NiceDate/NiceDate';
import {
  Row,
  Column,
  Column2,
} from 'styled/Responsive';
import {
  ClearButton,
} from 'styled/Elements';
import {
  Pic,
  Project,
  ProjectTitle,
  When,
  DownArrow,
} from './ProjectList.styled';
// const pic = require('./images/pic.jpg');

class ProjectList extends PureComponent {
  constructor(props) {
    super(props);
    const todate = new Date();

    this.state = {
      years: todate.getFullYear() - 2011,
      showNotSoRecent: false,
    };
    this.viewOlderProjects = this.viewOlderProjects.bind(this);
  }

  viewOlderProjects() {
    this.setState({
      showNotSoRecent: true,
    });
  }
  renderComma(index, lastIndex) {
    return (index !== lastIndex ? ', ' : '');
  }

  render() {
    const lastItemIndex = this.props.projects.length - 1;

    const projects = this.state.showNotSoRecent ?
      this.props.projects : this.props.projects.slice(0, 3);

    return (
      <Fragment>
        {
          projects.map(project => (
            <Project key={project.key} wrap="wrap" my={1} p={2}>
              <Column2>
                <ProjectTitle>
                  <StyledLink href={project.title.link}>{project.title.text}</StyledLink>
                </ProjectTitle>
                <When>
                  Started: {moment(project.date).format('MMM, YYYY')}
                </When>
                {
                  project.skills.map((skill, index) => (
                    <em
                      key={skill.toLowerCase()}
                    >
                      {skill}{this.renderComma(index, lastItemIndex)}
                    </em>
                  ))
                }
                <p>{project.title.time}</p>
              </Column2>
              <Column2 justify="flex-end">
                <Pic src={project.image} />
              </Column2>
              <Column py={2}>{project.description}</Column>
              <Column>
                {
                  project.bullets.length > 0 && (
                    <ul>
                      {
                        project.bullets.map((bullet, index) => (<li key={`${index}-{bullet.substr(0, 1)}`}>{bullet}</li>))
                      }
                    </ul>
                  )
                }
              </Column>
            </Project>
          ))
        }
        {
          !this.state.showNotSoRecent && (
            <Row justify="center" my={4}>
              <ClearButton onClick={this.viewOlderProjects}>Not So Recent work</ClearButton>
              <DownArrow onClick={this.viewOlderProjects} alt="See More" src="/static/images/down_arrow.png" />
            </Row>
          )
        }
      </Fragment>

    );
  }
}
ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
