import styled, { css } from 'styled-components';
import { media } from 'styled/utils';

export const Button = styled.button`
  background-color: #F20018;
  border: 0.1em solid red;
  margin: 0.2em 0;
  padding: 0 1.4rem;
`;

export const SmallButton = Button.extend`
  height: 2.6rem;
  padding: 0 .5rem;
  margin: .5rem;
  line-height: 2.6rem;

  ${media.handheld`
    font-size: 1rem;
  `};
`;

const transparentBack = css`
  background-color: transparent;
`;

// ${props => props.theme.bigTextColor};
export const ClearButton = Button.extend`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  ${transparentBack};

  ${media.handheld`
    font-size: 1.8rem;
  `};

  border: ${(props) => {
    if (props.bordered) {
      return ('1px solid ' + props.theme.colors.primary);
    }

    return 'none';
  }};

  &:hover {
    color: ${props => props.theme.colors.active};
    ${transparentBack};
  };
  &:focus {
    color: ${props => props.theme.colors.active};
    ${transparentBack};
  }
  &:disabled {
    color: ${props => props.theme.colors.inactive};
    ${transparentBack};
  };
`;

export const Anchor = styled.a`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  &:focus {
    color: ${props => props.theme.colors.active};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  };
  &:hover {
    color: ${props => props.theme.colors.active};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  };

  ${media.handheld`
    font-size: 1.8rem;
  `};
`;
