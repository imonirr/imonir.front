import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import { StyledLink } from 'styled/StyledLink';
// const NoteNav = styled(Link)`
//   color: ${props => props.theme.colors.initial};
//   text-decoration: none;
//   display: inline-block;
//   &:hover {
//     color: ${props => props.theme.colors.primary};
//   };
// `;

const NoteLink = props =>
  (
    <Link href={props.link.to} ><a>{props.link.title}</a></Link>
  );

NoteLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default NoteLink;
