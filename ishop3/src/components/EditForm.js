import React from 'react';

class EditForm extends React.Component {
  super(props) {
    this.props = props;
    this.state = {
      errorMessage: '',
      errorsName: false,
      errorQuantity: false,
      errorPrice: false,
      itemName: '',
      itemPrice: '',
      itemQuantity: '',
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCanceol = this.handleCancel.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatePrice = this.validatePrice.bind(this);
    this.validateQuantity = this.validateQuantity.bind(this);
  }

  validateName = () => {
    if (!this.state?.itemName) this.setState({ errorName: true });
    else if (
      this.state.itemName.length >= 3 &&
      this.state.itemName.length <= 100
    ) {
      this.setState({ errorName: false });
    } else this.setState({ errorName: true });
  };

  validatePrice = () => {
    if (!this.state?.itemPrice) this.setState({ errorPrice: true });
    else if (this.state.itemPrice > 0) this.setState({ errorPrice: false });
    else this.setState({ errorPrice: true });
  };

  validateQuantity = () => {
    if (!this.state?.itemQuantity) this.setState({ errorQuantity: true });
    else if (this.state.itemQuantity >= 0)
      this.setState({ errorQuantity: false });
    else this.setState({ errorQuantity: true });
  };

  validateInput = () => {
    if (
      this.state.errorName === false &&
      this.state.errorPrice === false &&
      this.state.errorQuantity === false
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
              onBlur={this.validateName}
            />
            <span className='message-error'>
              {this.state?.errorName &&
                'Name must be longer than 3 and shorter than 100 characters!'}
            </span>

            <label htmlFor='price'>Item price:</label>
            <input
              type='text'
              id='price'
              name='price'
              onChange={(e) => {
                this.setState({ itemPrice: e.target.value });
              }}
              onBlur={this.validatePrice}
            />
            <span className='message-error'>
              {this.state?.errorPrice && 'Price must be greater than zero!'}
            </span>

            <label htmlFor='quantity'>Item quantity:</label>
            <input
              type='text'
              id='quantity'
              name='quantity'
              onChange={(e) => {
                this.setState({ itemQuantity: e.target.value });
              }}
              onBlur={this.validateQuantity}
            />
            <span className='message-error'>
              {this.state?.errorQuantity &&
                'Quantity must be greater or equal to zero!'}
            </span>
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
