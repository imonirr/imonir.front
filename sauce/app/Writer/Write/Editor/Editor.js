import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');

let CodeMirror;

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }
  componentDidMount() {
    CodeMirror = require('react-codemirror2');
    require('codemirror/mode/markdown/markdown');
    this.setState({
      mounted: true,
    });
  }
  render() {
    if (!this.state.mounted) {
      return <p>Loading...</p>;
    }

    return (
      <Fragment>
        {
          CodeMirror && (
            <CodeMirror
              editorDidMount={editor => { this.instance = editor }}
              value={this.props.value}
              /* options={options} */
              onBeforeChange={this.props.handleChange}
              options={{
                theme: 'monokai',
                lineNumbers: true,
              }}
            />
          )
        }
      </Fragment>
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
