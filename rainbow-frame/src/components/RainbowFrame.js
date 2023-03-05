import React from 'react';

export default function RainbowFrame(props) {
  const array = [...props.colors];

  function helper() {
    const frameColor = array.pop();

    return (
      <div
        className='frame'
        style={{
          border: 'solid 8px ' + frameColor,
          padding: '4px',
        }}
      >
        {array.length >= 1 ? helper() : props.children}
      </div>
    );
  }

  return <div>{array.length >= 1 ? helper() : props.children}</div>;
}
