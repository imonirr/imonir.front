import React, { Component, Fragment } from 'react';
import Link from 'next/link';


import { Column, Row } from 'styled/Responsive';
import Container from 'styled/Container';
import {
  Anchor,
} from 'styled/Elements';
// import { Navigation } from 'styled/StyledLink';

import NoteList from 'components/NoteList/NoteList';
// import Button from 'styled/Button';

import Write from './Write/Write';


class Writer extends Component {
  render() {
    return (
      <Fragment>
        <p>{`writer with id: ${this.props.id}`}</p>
        {
          this.props.id && (
            <Column>
              <Write id={this.props.id} />
            </Column>
          )
        }
        {
          !this.props.id && (
            <Container>
              <Row>
                <Link href="/writer/new"><Anchor>New</Anchor></Link>
              </Row>
              <NoteList />
            </Container>
          )
        }

        {/*
        <Route
          exact
          path="/writer"
          render={() => (
            <Container>
              <Row>
                <Link href="/writer/new"><Anchor>New</Anchor></Link>
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
        */}
      </Fragment>
    );
  }
}

export default Writer;
