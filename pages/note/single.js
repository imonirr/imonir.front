import React, { Component } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import App from 'App/App';
import Note from 'Note/Note';
import {
  fetchNote,
} from 'redux/modules/note';

class NoteIndex extends Component {
  static getInitialProps({ store, isServer, query }) {
    console.log('In NoteInex');
    console.log(query);
    console.log('In NoteInex');

    if (isServer) {
      return store.dispatch(fetchNote(query.slug))
        .then(() => {
          return query;
        });
    }

    store.dispatch(fetchNote(query.slug));
    return query;
  }

  render() {
    console.log('from NoteIndex');
    console.log(this.props.query);
    return (
      <App>
        <Note slug={this.props.slug}/>
      </App>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNote,
  }, dispatch);

// export default NoteIndex;
export default withRedux(create, null, mapDispatchToProps)(NoteIndex);
