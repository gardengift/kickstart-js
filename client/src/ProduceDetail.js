import React, { Component } from 'react';

class ProduceDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
      Produce Detail
        <div onClick={this.props.onDisplayDetail}>
        X - close
        </div>
      </div>
    );
  }
}

export default ProduceDetail;