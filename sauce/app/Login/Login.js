import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Router from 'next/router'

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
      Router.push('/');
    }
  }
  responseFacebook(response) {
    console.log(response);
    if (response && response.accessToken) {
      console.log(`token: ${response.accessToken}`);
      this.props.login(response.accessToken);
      Router.push('/');
    }
  }
  render() {
    return (
      <FacebookLogin
        appId={FACEBOOK_APPID}
        fields="email"
        autoLoad
        callback={this.responseFacebook}
      />
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({
    authenticated: isAuthenticated(state),
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login,
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login);
