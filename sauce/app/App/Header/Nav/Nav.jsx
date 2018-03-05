import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
// import styled from 'styled-components';

// import {
//   isAuthenticated,
// } from 'redux/modules/auth';

import {
  NavList,
  NavItem,
  NavLink,
} from 'styled/NavList';

// const Seperator = styled.span`
//   color: ${props.theme.colors.initial}
// `;
const NavSeperator = () =>
  <Fragment>&#171;&#187;</Fragment>;

class Nav extends Component {
  render() {

    return (
      <NavList>
        <NavItem>
          <Link
            href="/"
          >
            <a>Moniruzzaman</a>
          </Link>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <Link
            href="/whatido"
          >
            <a>What I do</a>
          </Link>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <Link
            href="/whatidid"
          >
            <a>What I did</a>
          </Link>
        </NavItem>


        { /*this.props.authenticated &&
            (
              <NavItem>
                <NavLink
                 hrefo="/writer"
                >
                  Writer
                </NavLink>
              </NavItem>)
        */}
      </NavList>
    );
  }
}

// Nav.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
// };

// const mapStateToProps = state =>
//   ({
//     authenticated: isAuthenticated(state),
//   });

// export default connect(mapStateToProps)(withRouter(Nav));
export default withRouter(Nav);
