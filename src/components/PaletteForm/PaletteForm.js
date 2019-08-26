import React, { Component } from 'react';
import { addPalette } from '../../actions';
import './PaletteForm.css';
import { postPalette, getPalettes } from '../../Utils/API/apiCalls';
import randomColor from 'randomcolor';
import { connect } from 'react-redux';

export class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      projectId: 0,
      paletteName: '',
      projectName: '',
    }
  }

  savePalette = async (e) => {
    e.preventDefault()
    try {
      const palette = {
        // project_id: parseInt(this.state.projectId),
        palette_name: this.state.paletteName,
        color_1: randomColor(),
        color_2: randomColor(),
        color_3: randomColor(),
        color_4: randomColor(),
        color_5: randomColor()
      }
      console.log(palette)
      console.log(this.state.projectName);
      await postPalette(palette, this.state.projectName)
      const palettes = await getPalettes()
      console.log(palettes);
      this.props.addPalettes(palettes)
      this.setState({
        projectId: 0,
        paletteName: '',
        projectName: ''
      })
    } catch (error) {
      throw new Error(`failed to post: ${error.message}`)
    }
  }

  projectSelector = () => {
    return this.props.projects.map(project => {
      return <option value={project.id}>{project.name}</option>
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const projectNames = this.props.projects.map(project => {
      return <option>{project.name}</option>
    })
    return (
      <form onSubmit={this.savePalette}>
        <label for="project-selector">Or Select a Project</label>
        <select id="project-selector" onChange={this.handleChange} value={this.state.projectId} name="projectId">
          <option value={0} selected>--Select Your Project--</option>
          {this.projectSelector()}
        </select>
        <input type="text" placeholder="name your palette" id="palette" onChange={(e) => this.handleChange(e)} name="paletteName" value={this.state.paletteName} />
        <input type="submit" value="save palette" />
      </form>
    )
  }
}

export const mapStateToProps = (store) => ({
  projects: store.projects
})

export const mapDispatchToProps = (dispatch) => ({
  addPalette: palette => dispatch(addPalette(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaletteForm);