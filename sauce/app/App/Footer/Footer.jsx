import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #a11c20;
  height: 40px;
  color: #FFF;
  font-size: 14px;
  border: 1px solid orange;
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = () =>
  (
    <StyledFooter>Footer</StyledFooter>
  );

export default Footer;
