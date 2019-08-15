import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
// import withRedux from 'next-redux-wrapper';

import withReduxStore from 'redux/with-redux-store';
// import initStore from 'redux/create';
import initialize from 'utils/initialize';
// import Layout from '@Components/Layout/Layout';
import Layout from 'App/App';

// export default withRedux(initStore)(

class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {
    await initialize(ctx);
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render () {
    const {Component, pageProps, store} = this.props
    return <Container>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Container>
  }
}

export default withReduxStore(MyApp);
// })
