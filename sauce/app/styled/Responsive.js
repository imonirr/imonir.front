import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

// export const Row = styled.div`
//   display: flex;
//   box-sizing: border-box;
// `;

export const Row = props => (
  <Flex
    {...props}
    mx={-3}
  />
);

export const Column = props => (
  <Box
    {...props}
    px={3}
    flex="1 1 auto"
  />
);

