import React from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import WhatIDo from 'WhatIDo/WhatIDo';
import App from 'App/App';

const whatido = () =>
  (
    <App>
      <WhatIDo />
    </App>
  );


export default withRedux(create)(whatido);
