import React, { PureComponent } from 'react';

import NavSeperator from 'components/NavSeperator/NavSeperator';
import {
  NavList,
  NavItem,
} from 'styled/NavList';
import {
  StyledLink,
} from 'styled/StyledLink';


class SocialNav extends PureComponent {
  constructor(props) {
    super(props);

    this._links = {
      twitter: 'https://twitter.com/dostokhan',
      github: 'https://github.com/dostokhan',
      stackoverflow: 'https://stackoverflow.com/users/story/3637797',
    };
  }
  render() {
    return (
      <NavList>
        <NavItem>
          <StyledLink
            href={this._links.twitter}
          >twitter</StyledLink>

        </NavItem>

        <NavSeperator />

        <NavItem>
          <StyledLink
            href={this._links.github}
          >github</StyledLink>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <StyledLink
            href={this._links.stackoverflow}
          >stackoverflow</StyledLink>
        </NavItem>
      </NavList>
    );
  }
}

export default SocialNav;
