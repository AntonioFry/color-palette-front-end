import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProjects, addPalettes} from '../../actions';
import { postProject, getProjects } from '../../Utils/API/apiCalls';
import './ProjectForm.css';

export class ProjectForm extends Component {
constructor() {
  super()
  this.state = {
    projectId: 0,
    projectName: '',
    paletteName: ''
  }
}

saveProject = async (e) => {
  e.preventDefault()
  try {
    const project = {name: this.state.projectName}
    await postProject(project)
    const projects = await getProjects()
    this.props.addProjects(projects)
    this.setState({
      projectName: ''
    })
  } catch(error) {
    throw new Error(`failed to post: ${error.message}`)
  }
}

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({ [name]: value})
}
  render() {
    return (
      <section className="project-form-section">
        <form className="project-form" onSubmit={this.saveProject}>
          <label className="project-form-label" for="project">Create a Project</label>
          <input
          className="project-form-input"
          type="text"
          placeholder="name your project"
          id="project" onChange={this.handleChange}
          value={this.state.projectName}
          name="projectName" />
          <input
          className="project-form-button"
          type="submit"
          value="Save Project" />
          {/* <p className="savePaletteMessage">Next: <br/> Select your project and save your palettes</p> should appear after button click */}
        </form>
      </section>
    )
  }
}

const mapStateToProps = ({ projects }) => ({
  projects
})

const mapDispatchToProps = dispatch => ({
  addProjects: (projects => dispatch(addProjects(projects)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
