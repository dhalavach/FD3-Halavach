import React from 'react';

export default function DoubleButton({ caption1, caption2, cbPressed }) {
  return (
    <div>
      <button className='btn-small btn-one' onClick={cbPressed} value={caption1}>
       {caption1}
      </button>
      <button className='btn-small btn-two' onClick={cbPressed} value={caption2}>
        {caption2}
      </button>
    </div>
  );
}
