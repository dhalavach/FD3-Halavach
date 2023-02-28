import React from 'react';

class ProductCard extends React.Component {
  super(props) {
    this.props = props;
  }
  render() {
    return (
      <section className="product-card">
        <h3>{this.props.itemName}</h3>
      <div>
        Item price: {this.props.itemPrice}
        </div>
        <div>
          Item quantity: {this.props.itemQuantity}
        </div>
      </section>

    );
  }
}

export default ProductCard;
