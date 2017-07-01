
import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView:true
      });
    }
  }
  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter}>
          <div>
            {this.props.children({ isInView: this.state.IsInView}) }
          </div>
        </Waypoint>
      </div>

    );
  }
}

export default WhenInView;