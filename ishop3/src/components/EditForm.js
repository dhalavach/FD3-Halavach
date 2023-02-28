import React from 'react';

class EditForm extends React.Component {
  super(props) {
    this.props = props;
    this.state = { errorMessage: '' };
    this.handleSave = this.handleSave.bind(this);
    this.handleCanceol = this.handleCancel.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
  }

  validateInput = (e) => {
    if (
      e.target.name.value.length >= 3 &&
      e.target.price.value > 0 &&
      e.target.quantity.value >= 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  setErrorMessage = () => {
    this.setState({ errorMessage: 'Incorrect input data!' });
  };

  handleSave = (e) => {
    e.preventDefault();
    //console.log(e.target.name.value);

    if (this.validateInput(e)) {
      this.props.save(e);
      this.setState({ errorMessage: '' });
    } else this.setErrorMessage();
  };

  handleCancel = () => {
    this.props.cancel();
  };

  render() {
    return (
      <div className='edit-form'>
        <h2>Edit and save</h2>
        <span className = "message-error">{this.state?.errorMessage}</span>
        <form onSubmit={this.handleSave}>
          <div className='edit-form-fields-container'>
            <label htmlFor='name'>Item name:</label>
            <input type='text' id='name' name='name' />

            <label htmlFor='price'>Item price:</label>
            <input type='text' id='price' name='price' />

            <label htmlFor='quantity'>Item quantity:</label>
            <input type='text' id='quantity' name='quantity' />
          </div>
          <button type='submit' className='edit-form-save button-small'>
            Save
          </button>
          <button
            className='edit-form-cancel button-small'
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default EditForm;
