import React from 'react';
import Palette from '../Palette/Palette'

export const Project = ({ projectName, id, palettes }) => {
  const projectPalettes = palettes.filter(palette => palette.project_id === id);
  const paletteCards = projectPalettes.map(palette => {
    return (
      <Palette
      paletteName={palette.palette_name}
      id={palette.id}
      key={palette.id}
      color_1={palette.color_1}
      color_2={palette.color_2}
      color_3={palette.color_3}
      color_4={palette.color_4}
      color_5={palette.color_5}
      />
    )
  })
  return (
    <article>
      <h3>{projectName}</h3>
      {paletteCards}
    </article>
  )
}

export const mapStateToProps = (store) => ({
  palettes: store.palettes
})