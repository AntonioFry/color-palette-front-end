import React from 'react';
import './ColorCard.css'

export const ColorCard = ({ hexValue }) => {
  return (
    <article>
      <h3>{hexValue}</h3>
      <button>Lock</button>
    </article>
  )
}

export default ColorCard;