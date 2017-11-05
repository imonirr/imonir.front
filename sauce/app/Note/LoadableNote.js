import React from 'react';
import Loadable from 'react-loadable';

import Loader from 'components/Loader/Loader';

const LoadableComponent = Loadable({
  loader: () => import('./Note'),
  loading: Loader,
});

export default class LoadableNote extends React.Component {
  render() {
    return <LoadableComponent {...this.props}/>;
  }
}

