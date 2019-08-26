import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProjects, addPalette} from '../../actions';
import { postProject, postPalette,getProjects } from '../../Utils/API/apiCalls';

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


// savePalette = async (e) => {
//  e.preventDefault()
//  try {
//     const palette = { project_id: this.state.projectId, palette_name: this.state.paletteName, color_1:  }
//     const newPalette = await postPalette(palette)
//     this.props.addPalette(newPalette)
//     this.setState({
//       projectId: 0
//     })
//  } catch(error){
//   throw new Error(`failed to post: ${error.message}`)
//  }
// }

projectSelector = () => {
 return this.props.projects.map(project => {
      return <option value={project.id}>{project.name}</option>
  })
}

//handle change for onchange to make on function
  render() {
    return (
      <main>
        <form onSubmit={this.saveProject}>
          <label for="project">Create a Project</label>
          <input type="text" placeholder="name your project" id="project" onChange={(e) => this.setState({ projectName:  e.target.value})} value={this.state.projectName}/>
          <input type="submit" value="create and save project"/>
        </form>
        <form onSubmit={this.savePalette}>
        <label for="project-selector">Or Select a Project</label>
        <select id="project-selector" onChange={(e) => this.setState({ projectId:  parseInt(e.target.value) })} value={this.state.projectId}>
          <option value={0} selected>--Select Your Project--</option>
          {this.projectSelector()}
        </select>
        <input type="text" placeholder="name your palette" id="palette" onChange={(e) => this.setState({ palettetName:  e.target.value})} value={this.state.paletteName}/>
        <input type="submit" value="save palette"/>
      </form>
    </main>
    )
  }
}

const mapStateToProps = ({ projects}) => ({
  projects
})

const mapDispatchToProps = dispatch => ({
  addProjects: (project => dispatch(addProjects(project))),
  addPalette: (palette => dispatch(addPalette(palette)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
