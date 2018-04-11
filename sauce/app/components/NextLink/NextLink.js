import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import {
  Navigation,
} from 'styled/NavList';

class NextLink extends PureComponent {
  render() {
    return (
      <Navigation onClick={() => Router.push(this.props.href)}>
        {this.props.children}
      </Navigation>
    );
  }
}

NextLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default NextLink;
