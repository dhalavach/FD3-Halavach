import React from 'react';
import { useState, useEffect } from 'react';

export default function RainbowFrame(props) {
  //const [colors, setColors] = useState([]);
  // const [frameColor, setFrameColor] = useState('');
  // let arr = [...props.colors]
  // useEffect(() => {

  //     const arr = [...props.colors];
  //     const color = arr.pop();
  //     setColors(arr);
  //     setFrameColor(color);

  // }, [props.colors]);

  let array=[...props.colors]



  function helper() {
    
    let frameColor = array.pop();
    //setColors(arr)

    return (
      <div
        className='frame'
        style={{
          border: 'solid 8px ' + frameColor,
          padding: '4px',
        }}
      >{array.length> 1? helper() : props.children}</div>
    );
  }

  return (
    <div
      className='frame'
      style={{
        border: 'solid 8px ',
        padding: '4px',
      }}
    >
      {array.length >= 1 ? helper() : props.children}
    </div>
  );

  // return arr.length >= 1 ? helper(arr) : <div>{props.children}</div>;

  // <div
  //   className='frame'
  //   style={{
  //     border: 'solid 8px ' + frameColor,
  //     padding: '4px',
  //   }}
  // >
  //   {arr.length > 1 ? (
  //     <div colors={colors}>{props.children}</div>
  //   ) : (
  //     props.children
  //   )}
  // </div>
}
