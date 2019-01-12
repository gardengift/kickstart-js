import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';

const divStyle = {
  height: '150px'
};

export class FormComponent extends Component {
  render () {
    return (

        <div
          style={divStyle}
          >
            <h1>{this.props.isOpen}</h1>
            <Modal
              isOpen={this.props.isOpen}
              onRequestClose={this.props.closeModal}
              >
            <div>
              <TextField
                label="Produce 🥕"
              />
            </div>
            <div>
              <TextField
                label="Location 🏠"
              />
            </div>
            <div>
              <TextField
                label="Amount 🔟"
              />
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={this.props.closeModal} style={{marginRight: 20, marginTop:20, width: 200}}>
                Submit/Enviar
              </Button>
              <Button variant="contained" color="default" onClick={this.props.closeModal} style={{marginTop: 20, width: 200}}>
                x
              </Button>

            </div>
          </Modal>
          </div>

    )
  }
}

export default FormComponent;
