import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Row, Column } from 'styled/Responsive';
import { Input } from 'styled/Form';

import {
  // selectors
  noteLoading,
  getNote,
  // actions
  postNote,
  patchNote,
  fetchNote,
} from 'redux/modules/note';

import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

// const PreviewWrap = styled(Column)`
//   background-color: cornsilk;
//   color: #444;
//   font-family: Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif;
//   font-size: 16px;
//   line-height: 1.5em;
// `;

const EditPreviewWrap = styled(Row)`
  min-height: 700px;
  max-height: 100vh;
`;

class Write extends Component {
  constructor(props) {
    super(props);

    const { note } = this.props;
    this.state = {
      title: note ? note.title : '',
      content: note ? note.content : '',
    };
    this._changed = {};

    this.saveNote = this.saveNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }
  componentWillMount() {
    const { id } = this.props.match.params;

    if (id !== 'new') {
      this.props.fetchNote(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.note !== nextProps.note) {
      this.setState({
        note: nextProps.note.content,
        title: nextProps.note.title,
        content: nextProps.note.content,
      });
    }
  }

  handleTitle(event) {
    event.preventDefault();
    this._changed[event.target.name] = event.target.value;

    this.setState({ [event.target.name]: event.target.value });
  }
  handleChange(editor, data, value) {
    this._changed.content = value;

    this.setState({ content: value });
  }
  saveNote() {
    const { id } = this.props.match.params;

    if (this._changed.title ||
      this._changed.content) {
      if (id !== 'new') {
        this.props.patchNote(id, this._changed);
      } else {
        this.props.postNote(this._changed);
      }
    }
  }

  render() {
    if (this.props.loading ||
        (this.props.match.params.id !== 'new' && !this.props.note)
    ) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <Row>
          <button onClick={this.saveNote} >Save Note</button>
        </Row>
        <Row>
          <Input
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleTitle}
          />
        </Row>
        <EditPreviewWrap>
          <Column w={1 / 2}>
            <Editor handleChange={this.handleChange} value={this.state.content} />
          </Column>
          <Column w={1 / 2}>
            <Preview source={this.state.content} />
          </Column>
        </EditPreviewWrap>
      </div>
    );
  }
}


Write.defaultProps = {
  note: null,
};
Write.propTypes = {
  loading: PropTypes.bool.isRequired,
  note: PropTypes.object,
  match: PropTypes.object.isRequired,
  postNote: PropTypes.func.isRequired,
  fetchNote: PropTypes.func.isRequired,
  patchNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) =>
  ({
    loading: noteLoading(state),
    note: getNote(state, props.match.params),
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    postNote,
    patchNote,
    fetchNote,
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Write));

