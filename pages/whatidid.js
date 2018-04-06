import React, { PureComponent } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import {
  fetchCommits,
  commitList,
} from 'redux/modules/commit';
import App from 'App/App';
import WhatIDid from 'WhatIDid/WhatIDid';

class WhatIDidIndex extends PureComponent {
  static getInitialProps({ store, isServer, req, query }) {
    const state = store.getState();
    const commits = commitList(state);
    if (commits.length === 0) {
      console.log('NEED TO FETCH DATA');
      console.log(commits);
      if (isServer) {
        // console.log(query);
        return store.dispatch(fetchCommits());
      }

      return store.dispatch(fetchCommits());

    }
  }

  render() {
    return (
      <App>
        <WhatIDid />
      </App>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCommits,
  }, dispatch);


export default withRedux(create, null, mapDispatchToProps)(WhatIDidIndex);
