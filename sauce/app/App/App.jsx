import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import create from 'redux/create';
import theme from 'ui/theme';

import './App.css';

import Header from './Header/Header';
import Main from './Main/Main';


const AppBody = styled.div`
  font-family: "Trebuchet MS";
  color: ${props => props.theme.colors.initial};
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 1rem 1.6rem;
  background-color: ${props => props.theme.colors.background};
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
