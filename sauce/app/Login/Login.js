import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Router from 'next/router';

import FacebookLogin from 'react-facebook-login';
import {
  FACEBOOK_APPID,
} from 'helpers/constants';
import {
  isAuthenticated,
  login,
} from 'redux/modules/auth';
import Loader from 'components/Loader/Loader';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  componentDidMount() {
    this.setState({
      mounted: true,
    });

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
    if (!this.state.mounted) {
      return <Loader />;
    }

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
