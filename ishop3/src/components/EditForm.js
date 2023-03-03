import React from 'react';

class EditForm extends React.Component {
  super(props) {
    this.props = props;

    this.state = {
      errorsName: '',
      errorQuantity: false,
      errorPrice: false,
      itemName: '',
      itemPrice: '',
      itemQuantity: '',
      itemImageURL: '',
      itemImageAlt: '',
      userInputName: false,
      userInputPrice: false,
      userInputQuantity: false,
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatePrice = this.validatePrice.bind(this);
    this.validateQuantity = this.validateQuantity.bind(this);
  }

  validateName = () => {
    const message =
      'Name must be longer or equal than 3 and shorter or eual than 100 characters!';

    if (!this.state?.itemName) this.setState({ errorName: message });
    else if (
      this.state?.itemName.length >= 3 &&
      this.state?.itemName.length <= 100
    ) {
      this.setState({ errorName: '' });
    } else this.setState({ errorName: message });
  };

  validatePrice = () => {
    const message = 'Price must be greater than zero!';
    if (!this.state?.itemPrice) this.setState({ errorPrice: message });
    else if (this.state.itemPrice > 0) this.setState({ errorPrice: '' });
    else this.setState({ errorPrice: message });
  };

  validateQuantity = () => {
    const message = 'Quantity must be greater or equal to zero!';
    if (!this.state?.itemQuantity) this.setState({ errorQuantity: message });
    else if (this.state.itemQuantity >= 0) this.setState({ errorQuantity: '' });
    else this.setState({ errorQuantity: message });
  };

  handleSave = (e) => {
    e.preventDefault();
    if (
      !this.state.errorName &&
      !this.state.errorPrice &&
      !this.state.errorQuantity
    ) {
      this.props.save(
        this.state?.itemName,
        this.state?.itemPrice,
        this.state?.itemQuantity
      );
    }
  };

  handleCancel = () => {
    this.props.cancel();
  };

  componentDidMount() {
    const { name, price, quantity } = this.props;
    this.setState({
      itemName: name,
      itemPrice: price,
      itemQuantity: quantity,
    });
  }

  render() {
    return (
      <div className='edit-form'>
        <form onSubmit={this.handleSave}>
          <div className='edit-form-fields-container'>
            <label htmlFor='name'>Item name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={
                this.state?.userInputName
                  ? this.state?.itemName || ''
                  : this.props.name
              }
              onChange={(e) => {
                this.setState(
                  {
                    itemName: e.target.value,
                  },
                  this.validateName,
                  this.props.setDataIsChanged(),
                  this.setState({ userInputName: true })
                );
              }}
            />
            <span className='message-error'>{this.state?.errorName}</span>

            <label htmlFor='price'>Item price:</label>
            <input
              type='text'
              id='price'
              name='price'
              value={
                this.state?.userInputPrice
                  ? this.state?.itemPrice || ''
                  : this.props.price
              }
              onChange={(e) => {
                this.setState(
                  { itemPrice: e.target.value },
                  this.validatePrice,
                  this.props.setDataIsChanged(),
                  this.setState({ userInputPrice: true })
                );
              }}
            />
            <span className='message-error'>{this.state?.errorPrice}</span>

            <label htmlFor='quantity'>Item quantity:</label>
            <input
              type='text'
              id='quantity'
              name='quantity'
              value={
                this.state?.userInputQuantity
                  ? this.state?.itemQuantity || ''
                  : this.props.quantity
              }
              onChange={(e) => {
                this.setState(
                  { itemQuantity: e.target.value },
                  this.validateQuantity,
                  this.props.setDataIsChanged(),
                  this.setState({ userInputQuantity: true })
                );
              }}
            />
            <span className='message-error'>{this.state?.errorQuantity}</span>
          </div>
          <button
            type='submit'
            className={`edit-form-save button-small ${
              this.state?.errorName ||
              this.state?.errorPrice ||
              this.state?.errorQuantity
                ? 'button-grayed-out'
                : 'button-active'
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
