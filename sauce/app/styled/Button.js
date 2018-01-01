import styled from 'styled-components';
import theme from 'ui/theme';

const Button = styled.button`
  background-color: ${theme.colors.primary};
  border: .1rem solid ${theme.colors.primary};
  border-radius: .4rem;
  color: ${theme.colors.initial};
  cursor: pointer;
  display: inline-block;
  font-size: .7rem;
  font-weight: 600;
  height: 1.8rem;
  letter-spacing: .1rem;
  padding: 0 .4rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:focus,
  &:hover {
    background-color: ${theme.colors.secondary};
    border-color: ${theme.colors.secondary};
    color: ${theme.colors.initial};
    outline: 0;
  }
  &[disabled] {
    cursor: default;
    opacity: .5;

    &:focus,
    &:hover {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  }
`;

export default Button;
