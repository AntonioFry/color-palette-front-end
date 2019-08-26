import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProject} from '../../actions';

export class ProjectForm extends Component {
constructor() {
  super()
  this.state = {
    projectId: 0,
    projectName: ''
  }
}

submitProject = () => {
  
}


handleSubmit = (e) => {
  e.preventDefault()
  // const project = {
  //   name: 
  // }
  addProject(project)
}

projectSelector = () => {
 return this.props.projects.map(project => {
      return <option value={project.id}>{project.name}</option>
  })
}


  render() {
    return (
      <main>
        <form onSubmit={this.submitProject}>
          <label for="project">Create a Project</label>
          <input type="text" placeholder="name your project" id="project" onChange={(e) => this.setState({ projectName:  e.target.value})} value={this.state.projectName}/>
          <input type="submit" value="create and save project"/>
        </form>
        <form onSubmit={this.handleSubmit}>
        <label for="project-selector">Or Select a Project</label>
        <select id="project-selector" onChange={(e) => this.setState({ projectId:  parseInt(e.target.value) })} value={this.state.projectId}>
          <option value={0} selected>--Select Your Project--</option>
          {this.projectSelector()}
        </select>
        <input type="submit" value="save palette"/>
      </form>
    </main>
    )
  }
}

const mapStateToProps = ({ projects }) => ({
  projects
})

const mapDispatchToProps = dispatch => ({
  addProject: (project => dispatch(addProject(project)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
