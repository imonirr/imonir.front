import styled, { css } from 'styled-components';

import { Row } from 'styled/Responsive';
import {
  ClearButton,
  Anchor,
} from 'styled/Elements';
import { media } from 'styled/utils';
import Container from 'styled/Container';


const ContactFontSize = css`
  font-size: 1.2rem;
`;

export const ContactRow = styled(Row)`
  ${ContactFontSize};
  margin-bottom: 4em;
`

export const Button = styled(ClearButton)`
  margin: 0;
  padding: 0 2em;
  line-height: 1em;
  height: auto;

  ${ContactFontSize};
`;
export const Email = styled(Anchor)`
  ${ContactFontSize};
`;
export const Phone = styled.span`
  ${ContactFontSize};
`;
  // &:hover {
  //   color: ${props => props.theme.colors.secondary};
  //   background-color: transparent;
  // };
  // background-color: transparent;
  // border: none;
export const HeaderWrap = styled(Container)`
  margin: 0 auto 2rem auto;
`;
