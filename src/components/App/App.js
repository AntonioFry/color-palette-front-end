import React, { Component } from 'react';
import { getProjects, getPalettes } from '../../Utils/API/apiCalls';
import './App.css';
import { connect } from 'react-redux'
import { addProjects, addPalettes } from '../../actions';
import GeneratedColors from '../GeneratedColors/GeneratedColors';
import PaletteForm from '../PaletteForm/PaletteForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ProjectForm from '../ProjectForm/ProjectForm';

export class App extends Component {
 async componentDidMount() {
    try {
      const projects = await getProjects();
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
          <h1>Palette P<span>!</span>cker</h1>
        </header>
        <ProjectForm/>
        <GeneratedColors/>
        <PaletteForm/>
        <ProjectContainer/>
      </main>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addProjects: (projects => dispatch(addProjects(projects))),
  addPalettes: (palettes => dispatch(addPalettes(palettes)))
})

export default connect(null, mapDispatchToProps)(App)

