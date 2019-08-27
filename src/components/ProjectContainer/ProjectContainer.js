import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from '../Project/Project';
import './ProjectContainer.css';

export class ProjectContainer extends Component {

//   generateProjects = () => {
//   return this.props.projects.map(project => {
//     const palettes = this.props.palettes.filter(palette =>  palette.project_id === project.id)
//     return <Project {...project} palettes={palettes}/>
//    })
//  }

  render() {
    const projectCards = this.props.projects.map(project => {
      const palettes = this.props.palettes.filter(palette => palette.project_id === project.id)
      return <Project {...project} palettes={palettes} />
    });
    return (
      <section className='projects-container'>
        {projectCards}
      </section>
    )
  }
}

const mapStateToProps = ({ projects, palettes }) => ({
  projects,
  palettes
})


export default connect(mapStateToProps)(ProjectContainer)

