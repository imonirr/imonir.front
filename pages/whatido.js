import React, { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import WhatIDo from 'WhatIDo/WhatIDo';
import App from 'App/App';
import initialize from 'utils/initialize';

class WhatIDoPage extends PureComponent {
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  render() {
    return (
      <App>
        <WhatIDo />
      </App>
    );
  }
}


export default withRedux(create)(WhatIDoPage);
