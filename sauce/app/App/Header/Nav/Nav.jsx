import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { withRouter } from 'next/router';
import Link from 'next/link';

import NavSeperator from 'components/NavSeperator/NavSeperator';

import {
  NavList,
  NavItem,
} from 'styled/NavList';


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


        { /* this.props.authenticated &&
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
