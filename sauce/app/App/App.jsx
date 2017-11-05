import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import 'normalize.css';
// import 'milligram';

import create from 'redux/create';
import theme from 'ui/theme';
import AppBody from 'styledComponents/AppBody';
import './App.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

const store = create();

const App = () =>
  (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppBody>
            <Header />
            <Main />
            <Footer />
          </AppBody>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );

export default App;
