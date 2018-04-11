import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import { withRouter } from 'next/router';
import Link from 'next/link';


// import NextLink from 'components/NextLink/NextLink';
import WithAuth from 'components/WithAuth/WithAuth';
import NavSeperator from 'components/NavSeperator/NavSeperator';
import {
  NavList,
  NavItem,
} from 'styled/NavList';


class Nav extends PureComponent {
  render() {
    return (
      <NavList>
        <NavItem>
          <Link
            href="/"
          >
            <a>Moniruzzaman</a>
          </Link>
          {/*
          <NextLink href="/">Moniruzzaman</NextLink>
          */}
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


        {
          this.props.authorized && (
            <Fragment>
            <NavSeperator />
              <NavItem>
                <Link
                 href="/writer"
                >
                  <a>Writer</a>
                </Link>
              </NavItem>
            </Fragment>
          )
        }
      </NavList>
    );
  }
}

Nav.propTypes = {
  authorized: PropTypes.bool.isRequired,
};

// const mapStateToProps = state =>
//   ({
//     authorized: isauthorized(state),
//   });

export default WithAuth(Nav);
