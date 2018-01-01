import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';

const Preview = props =>
  (
    <Markdown source={props.source} />
  );


Preview.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Preview;
