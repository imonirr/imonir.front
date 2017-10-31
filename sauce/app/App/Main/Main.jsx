import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'styledComponents/Container';
import LoadableHome from 'Home/LoadableHome';

const Main = () =>
  (
    <Container>
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        { /* <Route path="/screenshare" component={ScreenshareContainer} /> */ }
      </Switch>
    </Container>
  );

export default Main;
