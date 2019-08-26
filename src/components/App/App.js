import React, { Component } from 'react';
import { getProjects, getPalettes } from '../../Utils/API/apiCalls';
import { setProjects, setPalettes } from '../../actions';
import { connect } from 'react-redux';
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
          <h1>Palette P<span>!</span>cker</h1>
        </header>
        <ProjectForm/>
<<<<<<< HEAD
        <PaletteForm/>
        <GeneratedColors/>
=======
        <GeneratedColors/>
        <PaletteForm/>
        <ProjectContainer/>
>>>>>>> 8ea6e7663783141335cf1612e6137758f822d00d
      </main>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addProjects: (projects => dispatch(addProjects(projects))),
  addPalettes: (palettes => dispatch(addPalettes(palettes)))
})

export default connect(null, mapDispatchToProps)(App)

