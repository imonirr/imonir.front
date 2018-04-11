import React, { PureComponent } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
// import { bindActionCreators } from 'redux';

import {
  // selectors
  getNote,
  // actions
  fetchNote,
} from 'redux/modules/note';

import App from 'App/App';
import Writer from 'Writer/Writer';

class WriterPage extends PureComponent {
  static getInitialProps({ store, isServer, req, query }) {
    if (query.id && query.id !== 'new') {
      const state = store.getState();
      const note = getNote(state, query);

      if (!note) {
        // console.log('NEED TO FETCH DATA');
        // console.log(query);
        if (isServer) {
          // console.log(query);
          return store.dispatch(fetchNote(query.id))
            .then(() => {
              return query;
            });
        }

        return store.dispatch(fetchNote(query.id));
      }
    }

    return query;
  }

  render() {
    return (
      <App>
        <Writer id={this.props.id}/>
      </App>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNote,
  }, dispatch);


// export default withRedux(create, null, mapDispatchToProps)(WriterPage);
export default withRedux(create)(WriterPage);
