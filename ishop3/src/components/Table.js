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
      dataIsChanged: false,
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

  remove = (id) => {
    if (!this.state.dataIsChanged) {
      const newItems = this.state.items.filter((item) => item.id !== id);
      this.setState({ items: newItems });
      this.setState({ productCardDisplayed: false });
    }
  };

  setActive = () => {
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
  };

  select = (item) => {
    if (!this.state.dataIsChanged) {
      this.setState({ activeItemId: item.id }, () => {
        this.setActive();
        this.setState({
          productCardDisplayed: true,
          newFormOpen: false,
        }); // test
      });
    }
  };

  edit = (item) => {
    if (!this.state.dataIsChanged) {
      this.setState({ activeItemId: item.id }, () => {
        this.setActive();
        this.setState({
          productCardDisplayed: false,
          editActive: true,
        });
      });
    }
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
                    this.select(item);
                  }}
                  removeElement={() => {
                    this.remove(item.id);
                  }}
                  editElement={() => this.edit(item)}
                  editActive={this.state.editActive}
                  dataIsChanged={this.state.dataIsChanged}
                />
              );
            })}
          </tbody>
        </table>

        <button
          className={`button-small ${
            this.state.dataIsChanged ? 'button-grayed-out' : 'button-active'
          }`}
          onClick={() => {
            if (!this.state.dataIsChanged) {
              this.setState({
                editActive: false,
                newFormOpen: true,
              });
            }
          }}
        >
          New product
        </button>

        <div>
          {this.state.newFormOpen && (
            <section>
              <h3>Add new product and save</h3>
              <EditForm
                setDataIsChanged={() => {
                  this.setState({ dataIsChanged: true });
                }}
                save={(itemName, itemPrice, itemQuantity) => {
                  let max = Number.MIN_SAFE_INTEGER;
                  for (let i = 0; i < this.state.items.length; i++) {
                    if (this.state.items[i].id > max)
                      max = this.state.items[i].id;
                  }
                  const newId = max + 1;

                  let newItem = {
                    //id: Math.ceil(Math.random() * 10e12),
                    id: newId,
                    className: 'Item',
                    itemImageURL: '',
                    itemImageAlt: '',
                    itemName: itemName,
                    itemPrice: itemPrice,
                    itemQuantity: itemQuantity,
                  };
                  const tempState = [...this.state.items];
                  tempState.push(newItem);
                  console.log(newItem.id);

                  this.setState({
                    items: tempState,
                    newFormOpen: false,
                    dataIsChanged: false,
                  });
                }}
                cancel={() => {
                  this.setState({ newFormOpen: false });
                }}
              />
            </section>
          )}
        </div>
        <div>
          {this.state.productCardDisplayed &&
            !this.state.dataIsChanged &&
            !this.state.newFormOpen &&
            !this.state.editActive && (
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
                setDataIsChanged={() => {
                  this.setState({ dataIsChanged: true });
                }}
                save={(itemName, itemPrice, itemQuantity) => {
                  let tempState = [...this.state.items];
                  tempState[this.state.activeIndex]['itemName'] = itemName;
                  tempState[this.state.activeIndex]['itemPrice'] = itemPrice;
                  tempState[this.state.activeIndex]['itemQuantity'] =
                    itemQuantity;

                  this.setState({
                    items: tempState,
                    editActive: false,
                    dataIsChanged: false,
                  });
                }}
                cancel={() => {
                  this.setState({
                    editActive: false,
                    dataIsChanged: false,
                  });
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
