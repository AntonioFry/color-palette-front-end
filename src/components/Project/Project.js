import Palette from '../Palette/Palette';
import React from 'react'

export default function Project(props) {

  getPalettes = () => {
    return props.palettes.map(palette => {
      return <Palette {...palette}/>
    })
  }

  return (
    <div>
      {getPalettes()}
    </div>
  )
}

