import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AddProduceFormButton extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Button variant="contained" color="default" onClick={this.props.onAddProduceForm} style={{marginTop: 20, width: 200}}>
          +
        </Button>
      </div>
    );
  }
}

export default AddProduceFormButton;
