import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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


class Writer extends PureComponent {
  render() {
    console.warn(`writer with id: ${this.props.id}`);

    return (
      <Container>
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
      </Container>
    );
  }
}
Writer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Writer;
