import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
// import 'milligram';

import theme from 'ui/theme';
import AppBody from 'styledComponents/AppBody';
import './App.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';


const App = () =>
  (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppBody>
          <Header />
          <Main />
          <Footer />
        </AppBody>
      </ThemeProvider>
    </BrowserRouter>
  );

export default App;
