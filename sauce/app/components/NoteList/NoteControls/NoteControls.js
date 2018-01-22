import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Navigation } from 'styled/StyledLink';
// import Button from 'styled/Button';

import {
  patchNote,
} from 'redux/modules/note';

const Controls = styled.div`
  text-align:right;
`;

const EditLink = styled(Navigation)`
  padding : 0px 5px;
`;

// const Action = styled(Button)`
//   margin: 0 5px;
//   font-size: 0.6rem;
//   height: 1.3rem;
// `;

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
          (<button className="button-outline" onClick={this.publishNote}>Publish</button>)
        }
        { this.props.published &&
          (<button className="button-outline" onClick={this.unpublishNote}>Unpublish</button>)
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
