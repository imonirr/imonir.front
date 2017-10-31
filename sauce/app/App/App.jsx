import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import 'milligram';

import './App.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';


const App = () =>
  (
    <BrowserRouter>
      <div id="reactstart" >
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );

export default App;
