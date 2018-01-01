import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StyledLink from 'styled/StyledLink';
import Button from 'styled/Button';

import {
  patchNote,
} from 'redux/modules/note';

const Controls = styled.div`
  text-align:right;
`;

const EditLink = styled(StyledLink)`
  padding : 0px 5px;
`

const Action = styled(Button)`
  margin: 0 5px;
  font-size: 0.6rem;
  height: 1.3rem;
`;

class NoteControls extends Component {
  constructor(props) {
    super(props);

    this.publishNote = this.publishNote.bind(this);
    this.unpublishNote = this.unpublishNote.bind(this);
  }

  publishNote() {
    this.props.patchNote(this.props.id, { isPublished: 1 });
  }
  unpublishNote() {
    this.props.patchNote(this.props.id, { isPublished: 0 });
  }

  render() {
    const link = `writer/${this.props.id}`;

    return (
      <Controls>
        { !this.props.published &&
          (<Action onClick={this.publishNote}>Publish</Action>)
        }
        { this.props.published &&
          (<Action onClick={this.unpublishNote}>Unpublish</Action>)
        }

        <EditLink to={link}>Edit</EditLink>
      </Controls>
    );
  }
}

NoteControls.propTypes = {
  id: PropTypes.number.isRequired,
  published: PropTypes.bool.isRequired,
  patchNote: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    patchNote,
  }, dispatch);
export default connect(null, mapDispatchToProps)(NoteControls);
