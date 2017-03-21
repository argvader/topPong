import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';
import { addWin } from '../../actions/leader';

function mapStateToProps(state) {
  return { leaders: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addWin: () => dispatch(addWin())
  };
}

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      runTimer: true
    };

    props.setInterval(this.handleTimer, 5000);
  }

  render() {
    return <span />;
  }

  handleTimer = () => {
    console.log('time');
    if (this.state.runTimer) {
      this.props.addWin();
    }
  };
}

History.propTypes = {
  setInterval: React.PropTypes.func.isRequired,
  addWin: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactTimeout(History));
