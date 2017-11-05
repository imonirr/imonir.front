import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoteLink = props =>
  (
    <Link to={props.link.to} >{props.link.title}</Link>
  );

NoteLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default NoteLink;
