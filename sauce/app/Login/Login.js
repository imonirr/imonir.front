import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FacebookLogin from 'react-facebook-login';
import {
  FACEBOOK_APPID,
} from 'helpers/constants';
import {
  isAuthenticated,
  login,
} from 'redux/modules/auth';


class Login extends Component {
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.history.push('/');
    }
  }
  responseFacebook(response) {
    console.log(response);
    if (response && response.accessToken) {
      this.props.login(response.accessToken);
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <FacebookLogin
        appId={FACEBOOK_APPID}
        autoLoad
        fields="email"
        callback={this.responseFacebook}
      />
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state =>
  ({
    authenticated: isAuthenticated(state),
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login,
  }, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
