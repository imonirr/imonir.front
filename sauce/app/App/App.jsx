import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'ui/theme';
import {
  initGA,
  logPageView,
} from 'utils/analytics';
import DetectHuman from 'containers/DetectHuman/DetectHuman';

import './App.css';
import Header from './Header/Header';


const AppBody = styled.div`
  min-height: 100vh;
  position: relative;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
`;

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
          <DetectHuman />
          <Header />
          { this.props.children }
        </AppBody>
      </ThemeProvider>
    );
  }
}
App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
