import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  noteList,
  fetchNoteList,
} from 'redux/modules/note';

import NoteList from './NoteList/NoteList';

class Home extends Component {
  componentWillMount() {
    this.props.fetchNoteList();
  }
  render() {
    return (
      <NoteList notes={this.props.notes} />
    );
  }
}

const mapStateToProps = state =>
  ({
    notes: noteList(state),
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNoteList,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
