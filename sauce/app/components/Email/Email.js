import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  ClearButton,
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
export const MailAddress = styled.span`
  display: inline-block;
  unicode-bidi: bidi-override;
  direction: rtl;
`;


class Email extends PureComponent {
  constructor(props) {
    super(props);
    const emailAddress = 'monir@imonir.com';
    this.state = {
      viewEmail: true,
      mail: emailAddress.split('').reverse().join(''),
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
        <MailAddress>
          {this.state.mail}
        </MailAddress>
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
