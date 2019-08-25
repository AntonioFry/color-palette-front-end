import React from 'react';
import Project from '../Project';

export const ProjectContainer = ({ projects }) => {
  const projectCards = projects.map(project => {
    return (
      <Project
        projectName={project.name}
        id={project.id}
        key={project.id}
      />
    )
  })
  return (
    <section>
      {projectCards}
    </section>
  )
}

export const mapStateToProps = (store) => ({
  projects: store.projects,
})