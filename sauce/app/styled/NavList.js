import styled from 'styled-components';
import { Navigation } from 'styled/StyledLink';

export const RootLink = styled(Navigation)`
  color: ${props => props.theme.colors.quinary};
  &:hover, &:focus {
    color: ${props => props.theme.colors.quinary};
    border-bottom: 1px solid ${props => props.theme.colors.background};
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;

  &:(:first-child) {
    margin-left: 0;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 .8rem;
`;


export const NavLink = styled(Navigation)`
  &.${props => props.activeClassName} {
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }
`;
NavLink.defaultProps = {
  activeClassName: 'active',
};


// const activeClassName = 'active';
// export const Nav = styled(Navigation).attrs({
//   activeClassName,
// })`
//   &.${activeClassName} {
//     border-bottom: 1px solid #e25a5e;
//     color: #e25a5e;
//   }
// `;
