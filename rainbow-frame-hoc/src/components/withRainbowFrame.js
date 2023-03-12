import React from 'react';

const withRainbowFrame =
  (colors) =>
  (Component) =>
  ({ ...props }) => {
    const reducer = (acc, cur) => {
      return (
        <div style={{ border: 'solid 5px ' + cur, padding: '5px' }}>{acc}</div>
      );
    };

    const rainbowFrame = colors.reduce(reducer, <Component {...props} />);

    return <div>{rainbowFrame}</div>;
  };

export default withRainbowFrame;
