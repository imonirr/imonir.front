// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});


const theme = {
  colors: {
    background: '#fff',
    initial: '#3A4145',

    // primary: '#e25a5e', //  '#9b4dca',
    // secondary: '#606c76',
    // tertiary: '#f4f5f6',
    // quaternary: '#d1d1d1',
    // quinary: '#e1e1e1',

    primary: '#333', //  '#999999', //  '#9b4dca',
    secondary: '#555555', //  '#777777',
    tertiary: '#555555',
    quaternary: '#333333',
    quinary: '#111111',
  },
  xy: {
    navHeight: '60px',
  },
};

export default theme;
