import React, { Component } from 'react';
import { getProjects, getPalettes } from '../../Utils/API/apiCalls';
import { setProjects, setPalettes } from '../../actions';
import { connect } from 'react-redux';
import './App.css';
import ProjectForm from '../ProjectForm/ProjectForm';
// import { connect } from 'react-redux'
import { addProjects, addPalettes } from '../../actions';
import GeneratedColors from '../GeneratedColors/GeneratedColors';
import PaletteForm from '../PaletteForm/PaletteForm';

export class App extends Component {
 async componentDidMount() {
    try {
      const projects = await getProjects();
      // this.props.setProjects(projects);
      const palettes = await getPalettes();
      this.props.addProjects(projects)
      this.props.addPalettes(palettes)
    } catch (error) {
      throw new Error(`failed to fetch: ${error.message}`)
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1>Palette Picker</h1>
        </header>
        <ProjectForm/>
        <PaletteForm/>
        <GeneratedColors/>
      </main>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addProjects: (projects => dispatch(addProjects(projects))),
  addPalettes: (palettes => dispatch(addPalettes(palettes)))
})

export default connect(null, mapDispatchToProps)(App)

