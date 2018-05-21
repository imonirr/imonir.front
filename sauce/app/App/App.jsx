import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
// import { Provider } from 'react-redux';
import normalize from 'normalize.css';
import milligram from 'milligram';
import GoogleAnalytics from 'react-ga';

// import create from 'redux/create';
import theme from 'ui/theme';
import {
  GA_TRACKING_ID,
} from 'helpers/constants';

import './App.css';

import Header from './Header/Header';
// import Main from './Main/Main';

if (PRODUCTION) {
  GoogleAnalytics.initialize(GA_TRACKING_ID);
}

// # #222629;
const AppBody = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: "Trebuchet MS";
  position: relative;
  padding: 1rem 1.6rem;
`;


// const store = create();

const App = ({ children }) =>
  (
    <ThemeProvider theme={theme}>
      <AppBody>
        <Header />
        { children }
      </AppBody>
    </ThemeProvider>
  );

// <Main />

export default App;
