import Palette from '../Palette/Palette';
import React from 'react'
import './Project.css'

export default function Project(props) {
  const paletteCards = props.palettes.map(palette => {
    return <Palette {...palette} />
  })
  return (
    <article className="project">
      <div className="project-name-container">
          <h2 className="project-name">{props.name}</h2>
          <button className="rmvBtn">X</button>
      </div>
      {paletteCards}
    </article>
  )
}