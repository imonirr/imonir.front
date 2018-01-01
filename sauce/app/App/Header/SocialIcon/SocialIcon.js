import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SocialLink,
  GithubIcon,
  TwitterIcon,
  StackOverflowIcon,
  IconWrap,
} from './SocialIcon.styled';

class SocialIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: {
        twitter: 'https://twitter.com/dostokhan',
        github: 'https://github.com/dostokhan',
        stackoverflow: 'https://stackoverflow.com/users/story/3637797',
      },
    };
  }
  render() {
    const isGithub = this.props.type === 'github';
    const isTwitter = this.props.type === 'twitter';
    const isSO = this.props.type === 'stackoverflow';
    return (
      <IconWrap>
        <SocialLink
          href={this.state.links[this.props.type]}
          target="_blank"
        >
          { isGithub &&
            <GithubIcon />
          }
          { isTwitter &&
            <TwitterIcon />
          }
          { isSO &&
            <StackOverflowIcon />
          }
        </SocialLink>
      </IconWrap>
    );
  }
}

SocialIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SocialIcon;
