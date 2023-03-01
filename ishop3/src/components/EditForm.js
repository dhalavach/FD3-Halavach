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
    this.handleCancel = this.handleCancel.bind(this);
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
      this.state?.itemName &&
      this.state?.itemName.length >= 3 &&
      this.state?.itemName.length <= 100 &&
      this.state?.itemPrice > 0 &&
      this.state?.itemQuantity >= 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  setErrorMessage = () => {
    this.setState({ errorMessage: 'Incorrect or identical input data!' });
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

  componentDidMount() {
    const name = this.props.name;
    const price = this.props.price;
    const quantity = this.props.quantity;
    this.setState({
      itemName: name,
      itemPrice: price,
      itemQuantity: quantity,
    });
  }

  render() {
    return (
      <div className='edit-form'>
    
        <span className='message-error'>{this.state?.errorMessage}</span>
        <form onSubmit={this.handleSave}>
          <div className='edit-form-fields-container'>
            <label htmlFor='name'>Item name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={this.state?.itemName}
              onChange={(e) => {
                this.setState({ itemName: e.target.value }, this.validateName);
              }}
              //onBlur={this.validateName}
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
              value={this.state?.itemPrice}
              onChange={(e) => {
                this.setState(
                  { itemPrice: e.target.value },
                  this.validatePrice
                );
              }}
              //onBlur={this.validatePrice}
            />
            <span className='message-error'>
              {this.state?.errorPrice && 'Price must be greater than zero!'}
            </span>

            <label htmlFor='quantity'>Item quantity:</label>
            <input
              type='text'
              id='quantity'
              name='quantity'
              value={this.state?.itemQuantity}
              onChange={(e) => {
                this.setState(
                  { itemQuantity: e.target.value },
                  this.validateQuantity
                );
              }}

              //onBlur={this.validateQuantity}
            />
            <span className='message-error'>
              {this.state?.errorQuantity &&
                'Quantity must be greater or equal to zero!'}
            </span>
          </div>
          <button
            type='submit'
            className={`edit-form-save button-small ${
              this.validateInput() ? 'button-active' : 'button-grayed-out'
            }`}
            onClick={this.handleSave}
          >
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
