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
            <Modal
              isOpen={this.props.isOpen}
              onRequestClose={this.props.closeModal}
              >
            <div style={{position: 'absolute', right: 20, top: 20}} onClick={this.props.closeModal}>
              X
            </div>
            <div>
              <TextField
                style={{width: 300}}
                label="Produce 🥕"
              />
            </div>
            <div>
              <TextField
                style={{width: 300}}
                label="Location 🏠"
              />
            </div>
            <div>
              <TextField
                style={{width: 300}}
                label="Amount 🔟"
              />
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={this.props.closeModal} style={{marginRight: 20, marginTop:20, width: 200}}>
                Submit/Enviar
              </Button>

            </div>
          </Modal>
          </div>

    )
  }
}

export default FormComponent;
