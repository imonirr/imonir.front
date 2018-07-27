import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


class NiceDate extends PureComponent {
  render() {
    // const time = moment(this.props.time).format('LL');
    const time = moment(this.props.time, 'YYYY-MM-DD').format('LL');

    return (
      <Fragment>{time}</Fragment>
    );
  }
}
NiceDate.propTypes = {
  time: PropTypes.string.isRequired,
};

export default NiceDate;
