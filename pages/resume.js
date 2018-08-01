import React, { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import Resume from 'routes/Resume/Resume';
import App from 'App/App';
import initialize from 'utils/initialize';

class ResumePage extends PureComponent {
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  render() {
    return (
      <App>
        <Resume />
      </App>
    );
  }
}


export default withRedux(create)(ResumePage);
