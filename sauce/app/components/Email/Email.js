import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  ClearButton,
  Anchor,
} from 'styled/Elements';
import {
  isHuman,
} from 'redux/modules/app';

export const Action = styled(ClearButton)`
  margin: 0;
  padding: 0 2em;
  line-height: 1em;
  height: auto;

  font-size: ${props => props.theme.font.small};
`;


class Email extends PureComponent {
  constructor(props) {
    super(props);
    const emailAddress = 'imonir.com@gmail.com';
    this.state = {
      viewEmail: false,
      mail: `${emailAddress}`,
      mailtoHref: `mailto:${emailAddress}`,
    };

    this.viewEmail = this.viewEmail.bind(this);
  }

  viewEmail() {
    this.setState({
      viewEmail: true,
    });
  }

  render() {
    if (this.props.human || this.state.viewEmail) {
      return (
        <Anchor
          href={this.state.mailtoHref}
        >
          {this.state.mail}
        </Anchor>
      );
    }

    return <Action onClick={this.viewEmail}>View Email</Action>;
  }
}

const mapStateToProps = state =>
  ({
    human: isHuman(state),
  });
export default connect(mapStateToProps)(Email);
