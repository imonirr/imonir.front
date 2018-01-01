import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'Home/Home';
import WhatIDo from 'WhatIDo/WhatIDo';
import WhatIDid from 'WhatIDid/WhatIDid';
import Note from 'Note/Note';
import Login from 'Login/Login';

import Writer from 'Writer/Writer';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const Main = () =>
  (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/whatido" component={WhatIDo} />
      <Route exact path="/whatidid" component={WhatIDid} />
      <Route exact path="/note/:noteslug" component={Note} />

      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/writer" component={Writer} />
    </Switch>
  );

export default Main;
