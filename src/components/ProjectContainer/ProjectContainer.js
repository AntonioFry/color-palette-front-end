import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from '../Project/Project';

export class ProjectContainer extends Component {

  generateProjects = () => {
  return this.props.projects.map(project => {
    const palettes = this.props.palettes.filter(palette =>  palette.project_id === project.id)
    return <Project {...project} palettes={palettes}/>
   })
 }

  render() {
    return (
      <div>
        {this.generateProjects()}
      </div>
    )
  }
}

const mapStateToProps = ({ projects, palettes }) => ({
  projects,
  palettes
})


export default connect(mapStateToProps)(ProjectContainer)

