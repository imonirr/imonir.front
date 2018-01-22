import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import {
  noteBySlug,
  fetchNote,
} from 'redux/modules/note';

import Loader from 'components/Loader/Loader';
import Container from 'styled/Container';

class Note extends Component {
  componentWillMount() {
    if (!this.props.note) {
      this.props.fetchNote(this.props.match.params.noteslug);
    }
  }

  render() {
    if (this.props.note) {
      return (
        <Container>
          <Markdown source={this.props.note} />
        </Container>
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
  fetchNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) =>
  ({
    note: noteBySlug(state, props.match.params.noteslug),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNote,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Note);

