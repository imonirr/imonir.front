import React from 'react';
import { Switch, Route, IndexRoute } from 'react-router-dom';

import Container from 'styledComponents/Container';
import LoadableHome from 'Home/LoadableHome';
import LoadableWhatIDo from 'WhatIDo/LoadableWhatIDo';
import LoadableWhatIDid from 'WhatIDid/LoadableWhatIDid';
import LoadableNote from 'Note/LoadableNote';

const Main = () =>
  (
    <Container>
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route exact path="/whatido" component={LoadableWhatIDo} />
        <Route exact path="/whatidid" component={LoadableWhatIDid} />
        <Route exact path="/note/:noteId" component={LoadableNote} />
      </Switch>
    </Container>
  );

export default Main;
