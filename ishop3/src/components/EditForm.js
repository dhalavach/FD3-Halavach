import React from 'react';

class EditForm extends React.Component {
  super(props) {
    this.props = props;
    this.state = {
      errorMessage: '',
      itemName: '',
      itemPrice: '',
      itemQuantity: '',
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCanceol = this.handleCancel.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
  }

  validateInput = () => {
    if (
      this.state.itemName.length >= 3 &&
      this.state.itemPrice > 0 &&
      this.state.itemQuantity >= 0
    ) {
      return true;
    } else return false;
  };

  setErrorMessage = () => {
    this.setState({ errorMessage: 'Incorrect input data!' });
  };

  handleSave = (e) => {
    e.preventDefault();
    if (this.validateInput()) {
      this.props.save(
        this.state.itemName,
        this.state.itemPrice,
        this.state.itemQuantity
      );
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
        <span className='message-error'>{this.state?.errorMessage}</span>
        <form onSubmit={this.handleSave}>
          <div className='edit-form-fields-container'>
            <label htmlFor='name'>Item name:</label>
            <input
              type='text'
              id='name'
              name='name'
              // value={this.state?.itemName}
              onChange={(e) => {
                this.setState({ itemName: e.target.value });
              }}
            />

            <label htmlFor='price'>Item price:</label>
            <input
              type='text'
              id='price'
              name='price'
              onChange={(e) => {
                this.setState({ itemPrice: e.target.value });
              }}
            />

            <label htmlFor='quantity'>Item quantity:</label>
            <input
              type='text'
              id='quantity'
              name='quantity'
              onChange={(e) => {
                this.setState({ itemQuantity: e.target.value });
              }}
            />
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
