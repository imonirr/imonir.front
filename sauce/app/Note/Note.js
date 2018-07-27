import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import {
  noteContentBySlug,
} from 'redux/modules/note';

import Loader from 'components/Loader/Loader';
import Container from 'styled/Container';


class Note extends Component {
  render() {
    console.warn('RENDER NOTE');
    console.log(`note length: ${this.props.noteContent.length}`);

    if (this.props.noteContent) {
      return (
        <Container>
          {/* this.props.note */}
          <Markdown source={this.props.noteContent} />
        </Container>
      );
    }

    return <Loader />;
  }
}

Note.defaultProps = {
  noteContent: '',
};
Note.propTypes = {
  noteContent: PropTypes.string,
};

const mapStateToProps = (state, props) =>
  ({
    noteContent: noteContentBySlug(state, props),
  });
export default connect(mapStateToProps)(Note);

