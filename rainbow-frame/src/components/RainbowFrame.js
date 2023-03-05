import React from 'react';
import { useState, useEffect } from 'react';

export default function RainbowFrame(props) {
  const [colors, setColors] = useState([]);
  const [frameColor, setFrameColor] = useState('');

  useEffect(() => {
    const arr = [...props.colors];
    const color = arr.pop();
    setColors(arr);
    setFrameColor(color);
  }, [props.colors]);

  return (
    <div
      className='frame'
      style={{
        border: 'solid 8px ' + frameColor,
        padding: '4px',
      }}
    >
      {props.colors.length > 1 ? (
        <RainbowFrame colors={colors}>{props.children}</RainbowFrame>
      ) : (
        props.children
      )}
    </div>
  );
}

