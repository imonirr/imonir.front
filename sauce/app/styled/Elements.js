import styled, { css } from 'styled-components';
// import { media } from 'styled/utils';

export const Button = styled.button`
  background-color: #F20018;
  border: 0.1em solid red;
  margin: 0.2em 0;
  padding: 0 1.4rem;
`;

// export const ButtonResponsive = Button.extend`
//   ${media.handheld`
//     font-size: 2rem;
//   `};

//   ${media.tablet`
//     font-size: 2rem;
//     line-height: 3rem;
//     padding: .1em 3rem;
//   `};
// `;


// font-size: 1.2rem;
// height: 3em;
// ${media.handheld`
//   font-size: ;
//   height: 34px;
// `}
export const SmallButton = Button.extend`
  height: 2.6rem;
  padding: 0 .5rem;
  margin: .5rem;
  line-height: 2.6rem;
  font-size: 1rem;
`;

const transparentBack = css`
  background-color: transparent;
`;

// ${props => props.theme.bigTextColor};
export const ClearButton = Button.extend`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.primary};
  margin: 0;
  ${transparentBack};

  border: ${(props) => {
    if (props.bordered) {
      return ('1px solid ' + props.theme.colors.primary);
    }

    return 'none';
  }};

  &:hover {
    color: ${props => props.theme.colors.secondary};
    ${transparentBack};
  };
  &:focus {
    color: ${props => props.theme.colors.secondary};
    ${transparentBack};
  }
  &:hover:disabled {
    color: #cecece;
    ${transparentBack};
  };
`;

