import React, { Component } from 'react-redux';
import { addPalette } from '../../actions';
import './PaletteForm.css';

export class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      projectName: '',
    }
  }

  handleChange(e) {
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
      <form>
        <select
        value={this.state.projectName}
        name='projectName'
        onSelect={(e) => this.handleChange(e)}>
          {projectNames}
        </select>
        <input
          value={this.state.paletteName}
          name="paletteName"
          placeholder="Name new palette"
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={(e) => this.handleSubmit}>Submit</button>
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

export default PaletteForm;