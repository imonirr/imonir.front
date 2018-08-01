import { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  humanInteraction,
} from 'redux/modules/app';

class DetectHuman extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      eventAttached: false,
      events: ['mousemove', 'scroll'],
    };

    this.handleActivity = this.handleActivity.bind(this);
  }
  componentDidMount() {
    console.log('Adding Activity Listener');
    this.state.events.forEach((event) => {
      window.addEventListener(event, this.handleActivity);
    });
  }
  componentWillUnmount() {
    if (this.state.eventAttached) {
      this.removeEventListeners();
    }
  }

  removeEventListeners() {
    console.log('Removing Activity Listener');
    this.state.events.forEach((event) => {
      window.removeEventListener(event, this.handleActivity);
    });
  }
  handleActivity() {
    this.setState({
      eventAttached: false,
    });
    this.props.humanInteraction();
    this.removeEventListeners();
  }

  render() {
    return null;
  }
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({
    humanInteraction,
  }, dispatch);
export default connect(null, mapDispatchToProps)(DetectHuman);
