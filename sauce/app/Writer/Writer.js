import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import { Column, Row } from 'styled/Responsive';
import Container from 'styled/Container';
import StyledLink from 'styled/StyledLink';
import NoteList from 'components/NoteList/NoteList';
// import Button from 'styled/Button';

import Write from './Write/Write';


class Writer extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/writer"
          render={() => (
            <Container>
              <Column>
                <Row>
                  <StyledLink to="/writer/new">New</StyledLink>
                </Row>
                <Row>
                  <NoteList />
                </Row>
              </Column>
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
      </div>
    );
  }
}

export default Writer;
