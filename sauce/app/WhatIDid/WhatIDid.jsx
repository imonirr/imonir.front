import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styled from 'styled-components';

import Container from 'styled/Container';
// import {
//   MaxContainer,
// } from 'styled/Responsive';


import {
  fetchCommits,
  commitList,
} from 'redux/modules/commit';


class WhatIDid extends PureComponent {
  componentWillMount() {
    if (this.props.commits.length === 0) {
      this.props.fetchCommits();
    }
  }
  render() {
    return (
      <Container>
        <p>What i Did</p>
      </Container>
    );
  }
}
WhatIDid.propTypes = {
  commits: PropTypes.array.isRequired,
  fetchCommits: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({
    commits: commitList(state),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCommits,
  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(WhatIDid);
