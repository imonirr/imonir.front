import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
// import 'milligram';

import AppBody from 'styledComponents/AppBody';
import './App.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';


const App = () =>
  (
    <BrowserRouter>
      <AppBody>
        <Header />
        <Main />
        <Footer />
      </AppBody>
    </BrowserRouter>
  );

export default App;
