import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  ClearButton,
} from 'styled/Elements';
import {
  isHuman,
} from 'redux/modules/app';

export const CellNo = styled.span`
  display: inline-block;
  unicode-bidi: bidi-override;
  direction: rtl;
  margin-left: 2em;
`;
export const Action = styled(ClearButton)`
  margin: 0;
  padding: 0 1em 0 2em;
  line-height: 1em;
  height: auto;

  font-size: ${props => props.theme.font.small};
`;


class Phone extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewPhone: true,
      cellNo: '+880 1716-108114'.split('').reverse().join(''),
    };

    this.viewPhone = this.viewPhone.bind(this);
  }

  viewPhone() {
    this.setState({
      viewPhone: true,
    });
  }

  render() {
    if (this.props.human || this.state.viewPhone) {
      return (
        <CellNo>
          {this.state.cellNo}
        </CellNo>
      );
    }

    return <Action onClick={this.viewPhone}>View Phone</Action>;
  }
}

const mapStateToProps = state =>
  ({
    human: isHuman(state),
  });
export default connect(mapStateToProps)(Phone);
