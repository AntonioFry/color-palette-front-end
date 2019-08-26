import Palette from '../Palette/Palette';
import React from 'react'

export default function Project(props) {
  const paletteCards = props.palettes.map(palette => {
    return <Palette {...palette} />
  })
  return (
    <div>
      <h2>{props.name}</h2>
      {paletteCards}
    </div>
  )
}