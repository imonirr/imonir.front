import React, { PureComponent } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import {
  // selectors
  getNote,
  // actions
  fetchNote,
} from 'redux/modules/note';

import App from 'App/App';
import Writer from 'Writer/Writer';
import initialize from 'utils/initialize';

class WriterPage extends PureComponent {
  static getInitialProps(ctx) {
    initialize(ctx);
    if (ctx.query.id && ctx.query.id !== 'new') {
      const state = ctx.store.getState();
      const note = getNote(state, ctx.query);

      if (!note) {
        // console.log('NEED TO FETCH DATA');
        // console.log(ctx.query);
        if (ctx.isServer) {
          // console.log(ctx.query);
          return ctx.store.dispatch(fetchNote(ctx.query.id))
            .then(() => ctx.query);
        }

        return ctx.store.dispatch(fetchNote(ctx.query.id));
      }
    }

    return ctx.query;
  }

  render() {
    return (
      <App>
        <Writer id={this.props.id} />
      </App>
    );
  }
}
WriterPage.defaultProps = {
  id: '',
};
WriterPage.propTypes = {
  id: PropTypes.string,
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchNote,
  }, dispatch);


export default withRedux(create, null, mapDispatchToProps)(WriterPage);
// export default withRedux(create)(WriterPage);
