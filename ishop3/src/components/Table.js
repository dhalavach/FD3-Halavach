import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import EditForm from './EditForm';
import data from './mockData.json';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      items: data.tbodyData,
      activeIndex: 0,
      editActive: false,
      editDisabled: false,
      deleteDisabled: false
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

  setActiveIndex = (i) => {
    this.setState({ activeIndex: i });
  };

  remove = (index) => {
    const newItems = this.state.items.filter((item) => item.id !== index);
    this.setItems(newItems);
  };

  edit = (index) => {
    this.setState({
      activeIndex: index,
      editActive: true,
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
                  isActive={this.state.activeIndex === item.id}
                  handleSelect={() => this.setActiveIndex(item.id)}
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
        <div>
          {this.state.editActive && (
            <EditForm
              save={(e) => {
                let tempState = [...this.state.items];
                tempState[this.state.activeIndex - 1]['itemName'] =
                  e.target.name.value;
                tempState[this.state.activeIndex - 1]['itemPrice'] =
                  e.target.price.value;
                tempState[this.state.activeIndex - 1]['itemQuantity'] =
                  e.target.quantity.value;

                this.setState({ items: tempState });
                this.setState({editActive: false})
              }}
              cancel={() => {
                this.setState({ editActive: false });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Table;
