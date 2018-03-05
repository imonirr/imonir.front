import React from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';

import App from 'App/App';
import Home from 'Home/Home';

const Index = () =>
  (
    <App>
      <Home />
    </App>
  );

// export default Index;
export default withRedux(create)(Index);
