import React, { PureComponent } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import {
  noteList,
  fetchNoteList,
} from 'redux/modules/note';
import App from 'App/App';
import Home from 'Home/Home';

class Index extends PureComponent {
  static getInitialProps({ store, isServer, req, query }) {
    const state = store.getState();
    const notes = noteList(state);
    if (notes.length === 0) {
      if (isServer) {
        // console.log(query);
        return store.dispatch(fetchNoteList());
      }

      return store.dispatch(fetchNoteList());

    }
  }

  render() {
    return (
      <App>
        <Home />
      </App>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNoteList,
  }, dispatch);

// export default Index;
export default withRedux(create, null, mapDispatchToProps)(Index);
