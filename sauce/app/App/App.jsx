import React from 'react';

import "normalize.css";
import 'milligram';

import './App.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';


const App = () =>
  (

    <div id="reactstart" >
      <Header />
      <Main />
      <Footer />
    </div>
  );

export default App;
