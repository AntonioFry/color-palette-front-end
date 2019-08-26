import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProjects, addPalettes} from '../../actions';
import { postProject, postPalette, getProjects, getPalettes } from '../../Utils/API/apiCalls';
import randomColor from 'randomcolor';

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

savePalette = async (e) => {
 e.preventDefault()
 try {
    const palette = {
      project_id: parseInt(this.state.projectId), 
      palette_name: this.state.paletteName, 
      color_1: randomColor(), 
      color_2: randomColor(), 
      color_3: randomColor(), 
      color_4: randomColor(), 
      color_5: randomColor()
    }
    console.log(palette)
    await postPalette(palette)
    const palettes = await getPalettes()
    this.props.addPalettes(palettes)
    this.setState({
      projectId: 0,
      paletteName: ''
    })
 } catch(error){
  throw new Error(`failed to post: ${error.message}`)
 }
}

projectSelector = () => {
 return this.props.projects.map(project => {
      return <option value={project.id}>{project.name}</option>
  })
}

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({ [name]: value})
}
  render() {
    return (
      <main>
        <form onSubmit={this.saveProject}>
          <label for="project">Create a Project</label>
          <input type="text" placeholder="name your project" id="project" onChange={this.handleChange} value={this.state.projectName} name="projectName" />
          <input type="submit" value="create and save project"/>
        </form>
        <form onSubmit={this.savePalette}>
        <label for="project-selector">Or Select a Project</label>
        <select id="project-selector" onChange={this.handleChange} value={this.state.projectId} name="projectId">
          <option value={0} selected>--Select Your Project--</option>
          {this.projectSelector()}
        </select>
        <input type="text" placeholder="name your palette" id="palette" onChange={this.handleChange} name="paletteName" value={this.state.paletteName}/>
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
  addProjects: (projects => dispatch(addProjects(projects))),
  addPalettes: (palettes => dispatch(addPalettes(palettes)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
