import React, { PureComponent } from 'react';

import NavSeperator from 'components/NavSeperator/NavSeperator';
import {
  NavItem,
} from 'styled/NavList';

import {
  SocialAnchor,
  SocialNavs,
} from './SocialNav.styled';


class SocialNav extends PureComponent {
  constructor(props) {
    super(props);

    this._links = {
      twitter: 'https://twitter.com/dostokhan',
      github: 'https://github.com/dostokhan',
      stackoverflow: 'https://stackoverflow.com/users/story/3637797',
      linkedin: 'https://www.linkedin.com/in/imonir/',
    };
  }
  render() {
    return (
      <SocialNavs>
        <NavItem>
          <SocialAnchor
            href={this._links.linkedin}
          >linkedin</SocialAnchor>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <SocialAnchor
            href={this._links.stackoverflow}
          >stackoverflow</SocialAnchor>
        </NavItem>

        <NavSeperator />

        <NavItem>
          <SocialAnchor
            href={this._links.twitter}
          >twitter</SocialAnchor>

        </NavItem>

        <NavSeperator />

        <NavItem>
          <SocialAnchor
            href={this._links.github}
          >github</SocialAnchor>
        </NavItem>

        <NavSeperator />

      </SocialNavs>
    );
  }
}

export default SocialNav;
