import React from 'react';

import NavList from 'styledComponents/NavList';
import StyledLink from 'styledComponents/StyledLink';

const Nav = () =>
  (
    <NavList>
      <StyledLink to="/whatidid" >What I did</StyledLink>
      <StyledLink to="/whatido" >What I do</StyledLink>
    </NavList>
  );


export default Nav;
