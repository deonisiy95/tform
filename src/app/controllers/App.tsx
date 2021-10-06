import React from 'react';

export default function App({children}: any) {
  return (
    <div>
      <div>----APP----</div>
      <div>-----------</div>
      {children}
      <div>-----------</div>
    </div>
  );
}
