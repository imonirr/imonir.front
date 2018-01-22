import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteNav = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: ${props => props.theme.colors.initial};
  };
`;

const NoteLink = props =>
  (
    <NoteNav to={props.link.to} >{props.link.title}</NoteNav>
  );

NoteLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default NoteLink;
