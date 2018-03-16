import React, { Component } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import App from 'App/App';
import Home from 'Home/Home';
import {
  fetchNoteList,
} from 'redux/modules/note';

class Index extends Component {
  static getInitialProps({ store, isServer, req, query }) {
    if (isServer) {
      console.log(query);
      return store.dispatch(fetchNoteList());
    }

    store.dispatch(fetchNoteList());
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
