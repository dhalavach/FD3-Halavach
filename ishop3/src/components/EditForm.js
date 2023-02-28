import React from 'react';

class EditForm extends React.Component {
  super(props) {
    this.props = props;
    //this.state = {};
    this.handleSave = this.handleSave.bind(this);
    this.handleCanceol = this.handleCancel.bind(this);
  }

  handleSave = (e) => {
    e.preventDefault();
    //console.log(e.target.name.value);
    
    this.props.save(e);
  };

  handleCancel = () => {
    this.props.cancel();
  };

  render() {
    return (
      <div className='edit-form'>
        <h2>Edit and save</h2>
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
