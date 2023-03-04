import React from 'react';
class RainbowFrame extends React.Component {
  super(props) {
    this.props = props;
  }

  state = {
    colors: [],
    frameColor: '',
  };

  componentWillMount() {
    const arr = [...this.props.colors];
    const color = arr.pop();
    this.setState({ colors: arr, frameColor: color });
  }

  render() {
    return (
      <div
        className='frame'
        style={{
          border: 'solid 8px ' + this.state.frameColor,
          padding: '4px',
        }}
      >
        {this.props.colors.length > 1 ? (
          <RainbowFrame colors={this.state.colors}>
            {this.props.children}
          </RainbowFrame>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default RainbowFrame;
