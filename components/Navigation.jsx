import React from 'react';

export const Navigation = () => {
  const list = ['reds', 'whites', 'sparkling', 'rose', 'dessert', 'port'];

  return (
    <ul>
      {list.map((i, idx) => (
        <li keys={idx}>{i}</li>
      ))}
    </ul>
  );
};
