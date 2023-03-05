import React from 'react';

export default function RainbowFrame(props) {
  const array = [...props.colors];

  function helper() {
    const frameColor = array.pop();

    return (
      <div
        className='rainbow-frame'
        style={{
          border: 'solid 8px ' + frameColor,
          padding: '4px',
        }}
      >
        {array.length >= 1 ? helper() : props.children}
      </div>
    );
  }

  return (
    <div className='rainbow-frames-container'>
      {array.length >= 1 ? helper() : props.children}
    </div>
  );
}
