import React from 'react';

export default function withRainbowFrame(arg1) {
  const array = [...arg1];

  return function helper(component) {
      const frameColor = array.pop();

      return (
        <div
          className='rainbow-frame'
          style={{
            border: 'solid 8px ' + frameColor,
            padding: '4px',
          }}
        >
          {array.length >= 1 ? helper(component) : component}
        </div>
      );
    }
   
  };

