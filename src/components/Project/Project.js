import React from 'react';

export const Project = ({ projectName }) => {
  return (
    <article>
      <h3>{projectName}</h3>

    </article>
  )
}

export const mapStateToProps = (store) => ({
  palettes: store.palettes
})