import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProjects, addPalettes} from '../../actions';
import { postProject, getProjects } from '../../Utils/API/apiCalls';

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
        <form onSubmit={this.saveProject}>
          <label for="project">Create a Project</label>
          <input type="text" placeholder="name your project" id="project" onChange={this.handleChange} value={this.state.projectName} name="projectName" />
          <input type="submit" value="create and save project"/>
        </form>
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
