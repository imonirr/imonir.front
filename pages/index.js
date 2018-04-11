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

// NOTE: if cookie is needed
// import jsHttpCookie from 'cookie';

// class MyPage extends Component {
//   static async getInitialProps({ req }) {
//     const initProps = {};
//     if (req && req.headers) {
//       const cookies = req.headers.cookie;
//       if (typeof cookies === 'string') {
//         const cookiesJSON = jsHttpCookie.parse(cookies);
//         initProps.token = cookiesJSON.token;
//       }
//     }
//     return initProps;
//   }
// }

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
