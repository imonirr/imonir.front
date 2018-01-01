import styled from 'styled-components';

const githubIcon = require('./assets/github.ico');
const twitterIcon = require('./assets/twitter.ico');
const stackoverflowIcon = require('./assets/stackoverflow.ico');


export const IconWrap = styled.li`
  margin: 0 6px;
  display: inline-block;
`;

export const SocialLink = styled.a`
  width: 16px;
  height: 16px;
`;

const Icon = styled.i`
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  height: 16px;
  width: 16px;
`;

export const GithubIcon = styled(Icon)`
  background-image: url(${githubIcon});
`;
export const TwitterIcon = styled(Icon)`
  background-image: url(${twitterIcon});
`;
export const StackOverflowIcon = styled(Icon)`
  background-image: url(${stackoverflowIcon});
`;
