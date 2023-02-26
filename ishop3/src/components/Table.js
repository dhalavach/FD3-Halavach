import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import data from './mockData.json';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      items: data.tbodyData,
      activeIndex: 0,
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
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
