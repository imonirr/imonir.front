import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';


import { Column, Row } from 'styled/Responsive';
import Container from 'styled/Container';
import { Navigation } from 'styled/StyledLink';
import NoteList from 'components/NoteList/NoteList';
// import Button from 'styled/Button';

import Write from './Write/Write';


class Writer extends Component {
  render() {
    return (
      <Fragment>
        <Route
          exact
          path="/writer"
          render={() => (
            <Container>
              <Row>
                <Navigation to="/writer/new">New</Navigation>
              </Row>
              <NoteList />
            </Container>
          )}
        />

        <Route
          exact
          path="/writer/:id"
          render={() =>
            <Column>
              <Write />
            </Column>
          }
        />
      </Fragment>
    );
  }
}

export default Writer;
