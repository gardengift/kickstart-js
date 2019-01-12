import React, { Component } from 'react';
import FormComponent from './FormComponent';

class AddProduceForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormComponent />
        <div onClick={this.props.onAddProduceForm}>
        X - close
        </div>
      </div>
    );
  }
}

export default AddProduceForm;
