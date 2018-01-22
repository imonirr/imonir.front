import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {
  isAuthenticated,
} from 'redux/modules/auth';

import {
  NavList,
  NavItem,
  NavLink,
  RootLink,
} from 'styled/NavList';

// const Seperator = styled.span`
//   color: ${props.theme.colors.initial}
// `;
const NavSeperator = () =>
  <Fragment>&#171;&#187;</Fragment>;

class Nav extends Component {
  render() {
    const activeClassName = 'active';

    return (
      <NavList>
        <NavItem>
          <RootLink
            exact
            activeClassName={activeClassName}
            to="/"
          >
            Moniruzzaman
          </RootLink>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <NavLink
            exact
            activeClassName={activeClassName}
            to="/whatidid"
          >
            What I did
          </NavLink>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <NavLink
            exact
            activeClassName={activeClassName}
            to="/whatido"
          >
            What I do
          </NavLink>
        </NavItem>
        { this.props.authenticated &&
            (
              <NavItem>
                <NavLink
                  exact
                  activeClassName={activeClassName}
                  to="/writer"
                >
                  Writer
                </NavLink>
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
