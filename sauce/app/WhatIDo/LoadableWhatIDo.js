import React from 'react';
import Loadable from 'react-loadable';

import Loader from 'components/Loader/Loader';

const LoadableComponent = Loadable({
  loader: () => import('./WhatIDo'),
  loading: Loader,
});

export default class LoadableHome extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

