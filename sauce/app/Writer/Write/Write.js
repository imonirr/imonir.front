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
      note: note ? note.content : '',
      title: note ? note.title : '',
      markdownSrc: note ? note.content : '',
    };

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
        markdownSrc: nextProps.note.content,
      });
    }
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
    if (this.props.loading ||
        (this.props.match.params.id !== 'new' && !this.props.note)
    ) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <Row>
          <button className="button-outline" onClick={this.saveNote} >Save Note</button>
        </Row>
        <Row>
          <Input placeholder="Note Title" value={this.state.title} onChange={this.handleTitle} />
        </Row>
        <EditPreviewWrap>
          <Column w={1 / 2}>
            <Editor handleChange={this.handleChange} value={this.state.markdownSrc} />
          </Column>
          <Column w={1 / 2}>
            <Preview source={this.state.markdownSrc} />
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
};

const mapStateToProps = (state, props) =>
  ({
    loading: noteLoading(state),
    note: getNote(state, props.match.params),
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    postNote,
    fetchNote,
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Write));

