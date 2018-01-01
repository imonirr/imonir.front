import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Navigation } from 'styled/StyledLink';
import {
  isAuthenticated,
} from 'redux/modules/auth';

import {
  NavList,
  NavItem,
} from './Nav.styled';


class Nav extends Component {
  render() {
    const activeNavStyle = {
      color: 'red',
    };

    return (
      <NavList>
        <NavItem>
          <Navigation
            exact
            activeStyle={activeNavStyle}
            to="/whatidid"
          >
            What I did
          </Navigation>
        </NavItem>
        <NavItem>
          <Navigation
            exact
            activeStyle={activeNavStyle}
            to="/whatido"
          >
            What I do
          </Navigation>
        </NavItem>
        { this.props.authenticated &&
            (
              <NavItem>
                <Navigation
                  exact
                  activeStyle={activeNavStyle}
                  to="/writer"
                >
                  Writer
                </Navigation>
              </NavItem>)
        }
      </NavList>
    );
  }
}

Nav.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state =>
  ({
    authenticated: isAuthenticated(state),
  });

export default withRouter(connect(mapStateToProps)(Nav));
