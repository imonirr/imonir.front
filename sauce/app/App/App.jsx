import React, { PureComponent } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
// import { Provider } from 'react-redux';
import normalize from 'normalize.css';
import milligram from 'milligram';

// import create from 'redux/create';
import theme from 'ui/theme';
import {
  initGA,
  logPageView,
} from 'utils/analytics';

import './App.css';

import Header from './Header/Header';
// import Main from './Main/Main';

const AppBody = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: "Trebuchet MS";
  position: relative;
  padding: 1rem 1.6rem;
`;


// const store = create();

class App extends PureComponent {
  componentDidMount() {
    if (PRODUCTION) {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBody>
          <Header />
          { this.props.children }
        </AppBody>
      </ThemeProvider>
    );
  }
}

export default App;
