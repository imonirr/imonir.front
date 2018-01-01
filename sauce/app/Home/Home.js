import React, { Component } from 'react';

import NoteList from 'components/NoteList/NoteList';
import Container from 'styled/Container';

class Home extends Component {
  render() {
    return (
      <Container>
        <NoteList />
      </Container>
    );
  }
}


export default Home;
