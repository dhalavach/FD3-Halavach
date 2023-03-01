import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import EditForm from './EditForm';
import ProductCard from './ProductCard';
import data from './mockData.json';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      items: data.tbodyData,
      activeItemId: '',
      editActive: false,
      productCardDisplayed: false,
      newFormOpen: false,
      activeItem: '',
    };
  }
  static propTypes = {
    heading: PropTypes.string,
    theadData: PropTypes.arrayOf(PropTypes.string),
    tbodyData: PropTypes.arrayOf(PropTypes.object),
  };

  setItems = (newData) => {
    this.setState({ items: newData });
  };

  setActiveItemId = (i) => {
    this.setState({ activeItemId: i });
  };

  remove = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setItems(newItems);
    this.setState({ productCardDisplayed: false });
  };

  edit = (i) => {
    this.setState({
      activeItemId: i,
      editActive: true,
      productCardDisplayed: false,
    });
  };
  render() {
    return (
      <div>
        <h1>{data.heading}</h1>
        <table className='customTable'>
          <thead>
            <tr>
              {data.theadData.map((h) => {
                return (
                  <td title={h} key={h}>
                    {h}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => {
              return (
                <Product
                  key={item.id}
                  data={this.state.items[index]}
                  isActive={this.state.activeItemId === item.id}
                  handleSelect={() => {
                    // this.setActiveItemId(item.id);
                    // this.setState({ productCardDisplayed: true });
                    // console.log(this.state.activeItemId)

                    this.setState({ activeItemId: item.id }, () => {
                      console.log(this.state.activeItemId);
                      this.setState({ productCardDisplayed: true });
                      const actItem = this.state.items.filter(
                        (item) => item.id === this.state.activeItemId
                      )[0];
                      this.setState({
                        activeItem: actItem,
                      });
                      const actIndex = this.state.items.findIndex(
                        (el) => el.id === this.state.activeItemId
                      );

                      this.setState({ activeIndex: actIndex });
                    });
                  }}
                  removeElement={() => {
                    this.remove(item.id);
                  }}
                  editElement={() => {
                    this.edit(item.id);
                  }}
                  editActive={this.state.editActive}
                />
              );
            })}
          </tbody>
        </table>
        <button
          className={`button-small ${
            this.state.editActive ? 'button-grayed-out' : 'button-active'
          }`}
          onClick={() => {
            if (!this.state.editActive) this.setState({ newFormOpen: true });
          }}
        >
          New product
        </button>
        <div>
          {this.state.newFormOpen && !this.state.editActive && (
            <section>
              <h3>Add new product and save</h3>
              <EditForm
                save={(itemName, itemPrice, itemQuantity) => {
                  let newItem = {
                    id: itemName,
                    className: 'Item',
                    itemImageURL: '',
                    itemImageAlt: '',
                    itemName: itemName,
                    itemPrice: itemPrice,
                    itemQuantity: itemQuantity,
                  };
                  let tempState = [...this.state.items];
                  tempState.push(newItem);

                  this.setState({ items: tempState });
                  this.setState({ newFormOpen: false });
                }}
                cancel={() => {
                  this.setState({ newFormOpen: false });
                }}
              />
            </section>
          )}
        </div>
        <div>
          {this.state.productCardDisplayed && (
            <ProductCard
              itemName={this.state.activeItem.itemName}
              itemPrice={this.state.activeItem.itemPrice}
              itemQuantity={this.state.activeItem.itemQuantity}
            />
          )}
        </div>
        <div>
          {this.state.editActive && (
            <section>
              <h3>Edit and save</h3>
              <EditForm
                save={(itemName, itemPrice, itemQuantity) => {
                  let tempState = [...this.state.items];
                  tempState[this.state.activeIndex]['itemName'] = itemName;
                  tempState[this.state.activeIndex]['itemPrice'] = itemPrice;
                  tempState[this.state.activeIndex]['itemQuantity'] =
                    itemQuantity;

                  this.setState({ items: tempState });
                  this.setState({ editActive: false });
                }}
                cancel={() => {
                  this.setState({ editActive: false });
                }}
                name={this.state.items[this.state.activeIndex]['itemName']}
                price={this.state.items[this.state.activeIndex]['itemPrice']}
                quantity={
                  this.state.items[this.state.activeIndex]['itemQuantity']
                }
              />
            </section>
          )}
        </div>
      </div>
    );
  }
}

export default Table;
