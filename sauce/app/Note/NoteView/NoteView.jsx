import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import Content from 'styled/Content';

const NoteView = props =>
  (
    <Content>
      <Markdown source={props.note} />
    </Content>
  );

NoteView.propTypes = {
  note: PropTypes.string.isRequired,
};

export default NoteView;
