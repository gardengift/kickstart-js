import React, { Component } from 'react';
import FormComponent from './FormComponent';

class AddProduceForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormComponent isOpen={this.props.isOpen} closeModal={this.props.onAddProduceForm}/>
      </div>
    );
  }
}

export default AddProduceForm;
