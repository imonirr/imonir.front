import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  noteById,
  fetchNote,
} from 'redux/modules/note';

import Loader from 'components/Loader/Loader';

import NoteView from './NoteView/NoteView';


class Note extends Component {
  componentWillMount() {
    if (!this.props.note) {
      this.props.fetchNote(this.props.match.params.noteId);
    }
  }

  render() {
    if (this.props.note) {
      return (
        <NoteView note={this.props.note} />
      );
    }

    return <Loader />;
  }
}

Note.defaultProps = {
  note: null,
};
Note.propTypes = {
  match: PropTypes.object.isRequired,
  note: PropTypes.string,
};

const mapStateToProps = (state, props) =>
  ({
    note: noteById(state, props.match.params.noteId),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNote,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Note);

