import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const TextArea = styled.textarea`
  min-height: 40rem;
  background-color: ${props => props.theme.colors.background};
`;

class Editor extends Component {
  render() {
    return (
      <TextArea
        placeholder="Note Content"
        value={this.props.content}
        onChange={this.props.handleChange}
      />
    );
  }
}
Editor.defaultProps = {
  content: '',
};
Editor.propTypes = {
  content: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};


export default Editor;
