import React from 'react';
import { Switch, Route, IndexRoute } from 'react-router-dom';

import Container from 'styledComponents/Container';
import LoadableHome from 'Home/LoadableHome';
import LoadableWhatIDo from 'WhatIDo/LoadableWhatIDo';
import LoadableWhatIDid from 'WhatIDid/LoadableWhatIDid';
import LoadableNote from 'Note/LoadableNote';
import Writer from 'Writer/Writer';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const Main = () =>
  (
    <Container>
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route exact path="/whatido" component={LoadableWhatIDo} />
        <Route exact path="/whatidid" component={LoadableWhatIDid} />
        <Route exact path="/note/:noteId" component={LoadableNote} />
        <PrivateRoute exact path="/writer" component={Writer} />
      </Switch>
    </Container>
  );

export default Main;
