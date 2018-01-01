import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledLink from 'styled/StyledLink';

const LinkWrap = styled(StyledLink)`
  font-size: 18px;
`;

const NoteLink = props =>
  (
    <LinkWrap to={props.link.to} >{props.link.title}</LinkWrap>
  );

NoteLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default NoteLink;
