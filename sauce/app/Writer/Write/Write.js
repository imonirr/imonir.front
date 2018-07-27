import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import moment from 'moment';
// import Router from 'next/router';

import { Row, Column } from 'styled/Responsive';
import { Input } from 'styled/Form';
import {
  SmallButton,
} from 'styled/Elements';

import {
  // selectors
  noteLoading,
  getNote,
  // actions
  postNote,
  patchNote,
  // fetchNote,
} from 'redux/modules/note';

import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

// const formateDate = (browserDate, ) =>
// `${value.substr(5, 2)}-${value.substr(8, 2)}-${value.substr(0, 4)}`

class Write extends Component {
  constructor(props) {
    super(props);

    const { note } = this.props;
    this.state = {
      title: note ? note.title : '',
      content: note ? note.content : '',
      date: note ? note.date : moment.utc(Date.now()).format('YYYY-MM-DD'),

      showPreview: false,
    };
    this._changed = {
      title: this.state.title,
    };
    if (!note) {
      this._changed.date = this.state.date;
    }

    this.saveNote = this.saveNote.bind(this);
    this.previewNote = this.previewNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }
  // componentWillMount() {
  //   const { id } = this.props.match.params;

  //   if (id !== 'new') {
  //     this.props.fetchNote(id);
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    if (this.props.note !== nextProps.note) {
      this.setState({
        note: nextProps.note.content,
        title: nextProps.note.title,
        content: nextProps.note.content,
      });
    }
  }

  handleTitle(event) {
    event.preventDefault();

    // let value = event.target.value;
    // if (event.target.name === 'date') {
    //   value = `${value.substr(5, 2)}-${value.substr(8, 2)}-${value.substr(0, 4)}`;
    // }

    this._changed[event.target.name] = event.target.value;

    this.setState({ [event.target.name]: event.target.value });
  }
  handleChange(event) {
    const value = event.target.value;
    this._changed.content = value;

    this.setState({ content: value });
  }
  previewNote() {
    this.setState({
      showPreview: !this.state.showPreview,
    });
  }
  saveNote() {
    const { id } = this.props;

    if (this._changed.title ||
      this._changed.content) {
      if (id !== 'new') {
        this.props.patchNote(id, this._changed);
      } else {
        this.props.postNote(this._changed);
      }
    }
  }

  render() {
    if (this.props.loading ||
        (this.props.id !== 'new' && !this.props.note)
    ) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <Row justify="space-between" mb={2}>
          <SmallButton onClick={this.previewNote} >Preview</SmallButton>
          <SmallButton onClick={this.saveNote} >Save Note</SmallButton>
        </Row>
        <Row>
          <Input
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleTitle}
          />
        </Row>

        <Row>
          <Input
            name="date"
            type="date"
            placeholder="Publish Date"
            value={this.state.date}
            onChange={this.handleTitle}
          />
        </Row>
        <Row>
          <Column>
            {
              !this.state.showPreview && (
                <Editor handleChange={this.handleChange} content={this.state.content} />
              )
            }
            {
              this.state.showPreview && (
                <Preview source={this.state.content} />
              )
            }
          </Column>
        </Row>
      </div>
    );
  }
}


Write.defaultProps = {
  note: null,
};
Write.propTypes = {
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  note: PropTypes.object,
  postNote: PropTypes.func.isRequired,
  patchNote: PropTypes.func.isRequired,
  // fetchNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) =>
  ({
    loading: noteLoading(state),
    note: getNote(state, props),
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    postNote,
    patchNote,
    // fetchNote,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Write);

