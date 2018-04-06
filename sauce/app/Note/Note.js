import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Markdown from 'react-markdown';

import {
  noteBySlug,
} from 'redux/modules/note';

import Loader from 'components/Loader/Loader';
import Container from 'styled/Container';

class Note extends Component {

  render() {
    console.warn('RENDER NOTE');
    console.log(`note length: ${this.props.note.length}`);

    if (this.props.note) {
      return (
        <Container>
          { this.props.note}
          {/*
            <Markdown source={this.props.note} />
          */}
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
  note: PropTypes.string,
};

const mapStateToProps = (state, props) =>
  ({
    note: noteBySlug(state, props),
  });
export default connect(mapStateToProps)(Note);

