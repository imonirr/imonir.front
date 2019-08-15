import React, { PureComponent } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import {
  noteList,
  fetchNoteList,
} from 'redux/modules/note';
// import App from 'App/App';
// import Home from 'routes/Home/Home';
// import initialize from 'utils/initialize';

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
  static async getInitialProps(ctx) {
    initialize(ctx);

    const state = ctx.store.getState();
    const notes = noteList(state);

    if (notes.length === 0) {
      if (ctx.isServer) {
        // console.log(ctx.query);
        return ctx.store.dispatch(fetchNoteList());
      }

      return ctx.store.dispatch(fetchNoteList());
    }
  }

  render() {
    return (
        <p>hola</p>
    );
  }
}

      //   <Home />

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNoteList,
  }, dispatch);

// export default Index;
export default withRedux(create, null, mapDispatchToProps)(Index);
