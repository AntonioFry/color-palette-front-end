import React, { Component } from 'react';
import { addPalettes } from '../../actions';
import './PaletteForm.css';
import { postPalette, getPalettes } from '../../Utils/API/apiCalls';
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
    const { currentColors } = this.props;
    e.preventDefault()
    try {
      const palette = {
        palette_name: this.state.paletteName,
        color_1: currentColors[0],
        color_2: currentColors[1],
        color_3: currentColors[2],
        color_4: currentColors[3],
        color_5: currentColors[4]
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
      <section className="palette-form-container">
        <form onSubmit={this.savePalette} className="palette-form">
          <label for="project-selector" className="palette-form-label">Select a Project</label>
          <select className="project-selector" onChange={this.handleChange} value={this.state.projectName} name="projectName">
            <option value={0} selected>--Select Your Project--</option>
            {projectNames}
          </select>
          <input
          type="text"
          placeholder="name your palette"
          onChange={(e) => this.handleChange(e)}
          name="paletteName"
          value={this.state.paletteName}
          className="palette-form-input"
          />
          <input
          type="submit"
          value="save palette"
          className="submit-palette-input"
          />
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (store) => ({
  projects: store.projects,
  currentColors: store.currentColors
})

export const mapDispatchToProps = (dispatch) => ({
  addPalettes: palette => dispatch(addPalettes(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaletteForm);