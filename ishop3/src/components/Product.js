import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { isActive: false };
    this.handleClick = this.props.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick = () => {
    this.props.handleSelect();
  };

  handleDelete = (event) => {
    event.stopPropagation();
    this.props.removeElement();
  };
  render() {
    return (
      <tr
        onClick={this.props.handleSelect}
        className={this.state.isActive ? 'select-color' : 'primary-color'}
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
          <button className='delete-button' onClick={this.props.handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Product;
