import React, { Component } from 'react';
import { addPalettes } from '../../actions';
import './PaletteForm.css';
import { postPalette, getPalettes } from '../../Utils/API/apiCalls';
import randomColor from 'randomcolor';
import { connect } from 'react-redux';

export class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      projectName: '',
    }
  }

  savePalette = async (e) => {
    e.preventDefault()
    try {
      const palette = {
        palette_name: this.state.paletteName,
        color_1: randomColor(),
        color_2: randomColor(),
        color_3: randomColor(),
        color_4: randomColor(),
        color_5: randomColor()
      }
      await postPalette(palette, this.state.projectName)
      const palettes = await getPalettes()
      this.props.addPalettes(palettes)
      this.setState({
        paletteName: '',
        projectName: ''
      })
    } catch (error) {
      throw new Error(`failed to post: ${error.message}`)
    }
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
    });
    return (
      <form onSubmit={this.savePalette}>
        <label for="project-selector">Or Select a Project</label>
        <select id="project-selector" onChange={this.handleChange} value={this.state.projectName} name="projectName">
          <option value={0} selected>--Select Your Project--</option>
          {projectNames}
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
  addPalettes: palette => dispatch(addPalettes(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaletteForm);