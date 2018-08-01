import React, { PureComponent, Fragment } from 'react';
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
import {
  Navigation,
} from 'styled/StyledLink';


class Nav extends PureComponent {
  render() {
    return (
      <NavList>
        <NavItem>
          <Link
            passHref
            href="/"
          >
            <Navigation>Notes</Navigation>
          </Link>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <Link
            href="/projects"
            passHref
          >
            <Navigation>
              Projects
            </Navigation>
          </Link>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <Link
            passHref
            href="/resume"
          >
            <Navigation>Resume</Navigation>
          </Link>
        </NavItem>


        {/*
        <NavSeperator />

        <NavItem>
          <Link
            passHref
            href="/whatidid"
          >
            <Navigation>What I did</Navigation>
          </Link>
        </NavItem>
        */}

        {
          this.props.authorized && (
            <Fragment>
              <NavSeperator />
              <NavItem>
                <Link
                  passHref
                  href="/writer"
                >
                  <Navigation>Writer</Navigation>
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
