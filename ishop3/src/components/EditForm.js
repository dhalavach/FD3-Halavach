import React from 'react';

class EditForm extends React.Component {
  super(props) {
    this.props = props;
    //this.state = {};
    this.handleSave = this.handleSave.bind(this);
    this.handleCanceol = this.handleCancel.bind(this);
  }

  handleSave = () => {
    this.props.save();
  };

  handleCancel = () => {
    this.props.cancel();
  };

  render() {
    return (
      <div class='edit-form'>
        <h2>Edit and save</h2>
        <form>
          <div className='edit-form-fields-container'>
            <label for='name'>Item name:</label>
            <input type='text' id='name' name='name' />

            <label for='price'>Item price:</label>
            <input type='text' id='price' name='price' />

            <label for='quantity'>Item quantity:</label>
            <input type='text' id='quantity' name='quantity' />
          </div>
        </form>
        <div className='edit-form-buttons'>
          <button
            className='edit-form-save button-small'
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
        </div>
      </div>
    );
  }
}

export default EditForm;
