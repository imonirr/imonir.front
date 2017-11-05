import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import NoteTime from 'styledComponents/NoteTime';
import NoteLink from './NoteLink/NoteLink';

const ListWrapper = styled.div`
  text-align: left;
  width: 400px;
  margin: 0 auto;
`;

const NoteList = (props) => {
  const dom = props.notes.map(n => (
    <ListWrapper key={n.key}>
      <NoteTime ><b>posted: </b>{n.date}</NoteTime>
      <NoteLink link={n.link}></NoteLink>
    </ListWrapper>
  ));

  return dom;
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};


export default NoteList;
