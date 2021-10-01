import React from 'react';
import Api from 'src/core/scripts/api';

export default function DashBoard() {
  return (
    <div>
      <div
        onClick={() => Api.send('orders')}
        style={{
          width: 200,
          height: 50,
          background: 'gray'
        }}
      >sadasd</div>
      Home
    </div>
  );
}
