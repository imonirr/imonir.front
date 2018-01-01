import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WithAuth from 'components/WithAuth/WithAuth';
import { Column, Row } from 'styled/Responsive';
import NoteTime from 'styled/NoteTime';
import {
  noteList,
  noteLoading,
  fetchNoteList,
} from 'redux/modules/note';

import Paragraph from 'styled/Paragraph';
import NoteLink from './NoteLink/NoteLink';
import NoteControls from './NoteControls/NoteControls';

const ListWrapper = styled(Row)`
  padding: 5px 0;
`;


class NoteList extends Component {
  componentWillMount() {
    this.props.fetchNoteList();
  }
  render() {
    return (
      <Column>
        {
          !this.props.loading && this.props.notes.length === 0 &&
            (<Paragraph>Nothing Here</Paragraph>)
        }
        {
          this.props.notes.map(n => (
            <ListWrapper key={n.key}>
              <Column>
                <Row>
                  <NoteLink link={n.link} />
                </Row>
                <Row><NoteTime ><b>posted: </b>{n.date}</NoteTime></Row>
              </Column>
              {
                this.props.authorized &&
                (
                  <Column>
                    <NoteControls id={n.id} published={n.published} />
                  </Column>
                )
              }
            </ListWrapper>
          ))
        }
      </Column>
    );
  }
}

NoteList.propTypes = {
  authorized: PropTypes.bool.isRequired,
  notes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,

  fetchNoteList: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({
    notes: noteList(state),
    loading: noteLoading(state),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNoteList,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(NoteList));
