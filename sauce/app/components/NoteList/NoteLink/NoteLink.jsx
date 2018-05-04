import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import { StyledLink } from 'styled/StyledLink';

const NoteLink = props =>
  (
    <Link
      as={props.link.as}
      href={props.link.href}
      passHref
    >
      <StyledLink>{props.link.title}</StyledLink>
    </Link>
  );

NoteLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default NoteLink;
