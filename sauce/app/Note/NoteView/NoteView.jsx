import React from 'react';
import PropTypes from 'prop-types';

const NoteView = props =>
  (
    <div>{props.note}</div>
  );

NoteView.propTypes = {
  note: PropTypes.string.isRequired,
};

export default NoteView;
