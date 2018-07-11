import React from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import App from 'App/App';

const TermsPage = () =>
  (
    <App>
      Terms Page
    </App>
  );


export default withRedux(create)(TermsPage);
