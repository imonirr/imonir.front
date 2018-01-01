import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { Row, Column } from 'styled/Responsive';
import Button from 'styled/Button';
import { Input } from 'styled/Form';

import {
  noteById,
  postNote,
} from 'redux/modules/note';

import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

const PreviewWrap = styled(Column)`
  background-color: cornsilk;
  color: #444;
  font-family: Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif;
  font-size: 16px;
  line-height: 1.5em;
`;

const EditPreviewWrap = styled(Row)`
  min-height: 700px;
  max-height: 100vh;
`;

class Write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: this.props.note,
      title: '',
      markdownSrc: this.props.note,
    };

    this.saveNote = this.saveNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }
  componentWillMount() {
    console.log(this.props.match.params);
  }

  handleTitle(event) {
    event.preventDefault();

    this.setState({ title: event.target.value });
  }
  handleChange(editor, data, value) {
    this.setState({ markdownSrc: value });
  }
  saveNote() {
    if (this.state.title.length > 0 &&
      this.state.markdownSrc.length > 0) {
      this.props.postNote({
        title: this.state.title,
        content: this.state.markdownSrc,
      });
    }
  }

  render() {
    if (!this.props.note) {
      return <p>Loading ...</p>;
    }

    return (
      <Column>
        <Row>
          <Column>
            <Input placeholder="Note Title" value={this.state.title} onChange={this.handleTitle} />
          </Column>
        </Row>
        <EditPreviewWrap>
          <Column w={1 / 2}>
            <Editor handleChange={this.handleChange} value={this.state.markdownSrc} />
          </Column>
          <PreviewWrap w={1 / 2}>
            <Preview source={this.state.markdownSrc} />
          </PreviewWrap>
        </EditPreviewWrap>
        <Row>
          <Column >
            <Button onClick={this.saveNote} >Save Note</Button>
          </Column>
        </Row>
      </Column>
    );
  }
}


Write.defaultProps = {
  note: '',
};
Write.propTypes = {
  note: PropTypes.string,
  postNote: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) =>
  ({
    note: noteById(state, props.match.params),
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    postNote,
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Write));

