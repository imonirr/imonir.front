import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Box } from 'grid-styled';

import 'normalize.css';
// import 'milligram';

import create from 'redux/create';
import theme from 'ui/theme';

import './App.scss';

import Header from './Header/Header';
import Main from './Main/Main';


const AppBody = styled(Box)`
  line-height: 1.5;
  font-family: "Trebuchet MS";
  color: #000;
  font-size: 112.5%;
  position: relative;
  width: 100%;
`;


const store = create();

const App = () =>
  (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppBody>
            <Header />
            <Main />
          </AppBody>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );

export default App;
