import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import WithAuth from 'components/WithAuth/WithAuth';
import { Row } from 'styled/Responsive';

import {
  noteList,
  noteLoading,
  fetchNoteList,
} from 'redux/modules/note';

import NiceDate from 'components/NiceDate/NiceDate';
import Paragraph from 'styled/Paragraph';
import NoteLink from './NoteLink/NoteLink';
import NoteControls from './NoteControls/NoteControls';


const NoteTime = styled.span`
  font-size: .8em;
  display: block;
  color: ${props => props.theme.colors.tertiary};
`;
  // color: #001f3f;

class NoteList extends PureComponent {
  componentWillMount() {
    this.props.fetchNoteList();
  }
  render() {
    return (
      <Fragment>
        {
          !this.props.loading && this.props.notes.length === 0 &&
            (<Paragraph>Nothing Here</Paragraph>)
        }
        {
          this.props.notes.map(n => (
            <Row key={n.key} direction="row">
              <Box mr="auto">
                <NoteTime><NiceDate time={n.date} /></NoteTime>
                <NoteLink link={n.link} />
              </Box>
              {
                this.props.authorized &&
                (
                  <NoteControls id={n.id} published={n.published} />
                )
              }
            </Row>
          ))
        }
      </Fragment>
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
