// import Link from 'next/link';
import styled from 'styled-components';

// const commonStyle = styled`
//   color: ${props => props.theme.colors.primary};
//   text-decoration: none;
//   display: inline-block;
//   border-bottom: 1px solid ${props => props.theme.colors.background};
//   &:hover {
//     color: ${props => props.theme.colors.primary};
//     border-bottom: 1px solid ${props => props.theme.colors.primary};
//   }
// `;

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: inline-block;
  border-bottom: 1px solid ${props => props.theme.colors.background};
  &:focus {
    color: ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  };
  &:hover {
    color: ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  };
`;


export const Navigation = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: inline-block;
  border-bottom: 1px solid ${props => props.theme.colors.background};
  &:focus {
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  };
  &:hover {
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  };
`;

// export default StyledLink;
