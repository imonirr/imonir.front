import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');
require('codemirror/mode/markdown/markdown');

class Editor extends Component {
  render() {
    return (
      <CodeMirror
        value={this.props.value}
        /* options={options} */
        onBeforeChange={this.props.handleChange}
        options={{
          theme: 'monokai',
          lineNumbers: true,
        }}
      />
    );
  }
}


Editor.defaultProps = {
  value: '',
};

Editor.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};


export default Editor;
