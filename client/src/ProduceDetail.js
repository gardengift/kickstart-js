import React, { Component } from 'react';
import Modal from 'react-modal';

class ProduceDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.closeModal}>
        <div style={{position: 'absolute', right: 20, top: 20}} onClick={this.props.closeModal}>
          X
        </div>

        <div style={{marginTop: 30}} onClick={this.props.onDisplayDetail}>
          <img className="produceDetailImage"
            src="https://www.growing-gardens.org/wp-content/uploads/2013/03/Angelina15101213600_1316-624x550.jpg"
            alt="new"
          />
          <div className="message">
            Hola, me and my children would love to share our tomatoes with you, our neighbors.  Please come by and say hello.
          </div>
          <div>
          </div>
          <div className="address">
            📍7400 NE Frederickson Dr.
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProduceDetail;
