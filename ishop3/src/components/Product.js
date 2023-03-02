import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick = () => {
   this.props.handleSelect();
  };

  handleDelete = (event) => {
    event.stopPropagation();
    this.props.removeElement();
  };

  handleEdit = (event) => {
    event.stopPropagation();
    this.props.editElement();
  };
  render() {
    return (
      <tr
        onClick={this.handleClick}
        className={this.props.isActive ? 'select-color' : 'primary-color'}
        key={this.props.data.id}
      >
        <td>{this.props.data.itemName}</td>
        <td>{this.props.data.itemPrice}</td>
        <td>
          {
            <img
              src={this.props.data.itemImageURL}
              alt={this.props.data.itemImageAlt}
            />
          }
        </td>
        <td>{this.props.data.itemQuantity}</td>
        <td>

          
          <button
            className={`${
              this.props.dataIsChanged ? 'button-grayed-out' : 'button-active'
            } button-small`}
            onClick={this.props.dataIsChanged ? undefined : this.handleEdit}
          >
            Edit
          </button>


          <button
            className={`${
              this.props.dataIsChanged ? 'button-grayed-out' : 'button-active'
            } button-small`}
            onClick={this.props.dataIsChanged ? undefined : this.handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Product;
