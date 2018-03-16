import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Markdown from 'react-markdown';

import {
  // noteBySlug,
  fetchNote,
} from 'redux/modules/note';

import Loader from 'components/Loader/Loader';
import Container from 'styled/Container';

class Note extends Component {
  // componentWillMount() {
  //   if (!this.props.note) {
  //     this.props.fetchNote(this.props.match.params.slug);
  //   }
  // }

  render() {
    if (this.props.note) {
      return (
        <Container>
          { Object.keys(this.props.note) }
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
  params: null,
};
Note.propTypes = {
  // match: PropTypes.object.isRequired,
  params: PropTypes.object,
  note: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  console.log('props');
  console.log(props);
  return ({
    note: state.note.byId, // noteBySlug(state, props.match.params.slug),
  });
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNote,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Note);

