import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'styledComponents/Container';
import Home from 'Home/Home';

const Main = () =>
  (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        { /* <Route path="/screenshare" component={ScreenshareContainer} /> */ }
      </Switch>
    </Container>
  );

export default Main;
