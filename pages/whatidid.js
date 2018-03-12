import React from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import WhatIDid from 'WhatIDid/WhatIDid';
import App from 'App/App';

const whatidid = () =>
  (
    <App>
      <WhatIDid />
    </App>
  );


export default withRedux(create)(whatidid);
