import React, { PureComponent } from 'react';
import create from 'redux/create';
import { connect } from 'react-redux'
// import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import {
  noteList,
  fetchNoteList,
} from 'redux/modules/note';
import App from 'App/App';
import Home from 'routes/Home/Home';
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
  static getInitialProps(ctx) {
    // initialize(ctx);

    const state = ctx.reduxStore.getState();
    const notes = noteList(state);

    if (notes.length === 0) {
      if (ctx.isServer) {
        // console.log(ctx.query);
        return ctx.reduxStore.dispatch(fetchNoteList());
      }

      return ctx.reduxStore.dispatch(fetchNoteList());
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
export default connect(null, mapDispatchToProps)(Index)
// export default withRedux(create, null, mapDispatchToProps)(Index);



// import React from 'react'
// import { connect } from 'react-redux'
// // import { startClock, serverRenderClock } from 'redux/store'
// // import Examples from '../components/examples'

// class Index extends React.Component {
//   static getInitialProps ({ reduxStore, req }) {
//     const isServer = !!req
//     // reduxStore.dispatch(serverRenderClock(isServer))

//     return {}
//   }

//   componentDidMount () {
//     const { dispatch } = this.props
//     // this.timer = startClock(dispatch)
//   }

//   componentWillUnmount () {
//     clearInterval(this.timer)
//   }

//   render () {
//     return (
//         <h2>Hola amigo</h2>
//     );
//   }
// }

// export default connect()(Index)
