import React from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import App from 'App/App';

const PrivacyPage = () =>
  (
    <App>
      Privacy Page
    </App>
  );


export default withRedux(create)(PrivacyPage);
