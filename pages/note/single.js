import React, { Component, Fragment } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import Head from 'next/head';

import App from 'App/App';
import Note from 'Note/Note';
import {
  noteContentBySlug,
  fetchNote,
} from 'redux/modules/note';

class NoteIndex extends Component {
  static getInitialProps({ store, isServer, query }) {
    const state = store.getState();
    const note = noteContentBySlug(state, query);

    if (!note) {
      if (isServer) {
        return store.dispatch(fetchNote(query.slug))
          .then(() => query);
      }

      return store.dispatch(fetchNote(query.slug));
    }

    return query;
  }

  render() {
    return (
      <App>
        <Fragment>
          <Head>
            <title>{this.props.slug}</title>
          </Head>
          <Note slug={this.props.slug} />
        </Fragment>
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
