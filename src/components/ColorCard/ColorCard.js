import React from 'react';

export const ColorCard = ({ hexValue }) => {
  return (
    <article>
      <h3>{hexValue}</h3>
      <button>Lock</button>
    </article>
  )
}