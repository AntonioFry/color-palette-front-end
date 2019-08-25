import React from 'react';

export const ProjectContainer = () => {
  return (
    <section>

    </section>
  )
}

export const mapStateToProps = (store) => ({
  projects: store.projects,
  palettes: store.palettes
})