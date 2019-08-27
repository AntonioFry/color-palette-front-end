import React, { Component } from 'react';
import { getProjects, getPalettes } from '../../Utils/API/apiCalls';
import { setProjects, setPalettes } from '../../actions';
import { connect } from 'react-redux';
import './App.css';
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
        <GeneratedColors/>
        <PaletteForm/>
        <ProjectForm/>
        {!this.props.palettes.length && 
        <ProjectContainer/>}
      </main>
    )
  }
}

const mapStateToProps = (store) => ({
  palettes: store.palettes
})

const mapDispatchToProps = dispatch => ({
  addProjects: (projects => dispatch(addProjects(projects))),
  addPalettes: (palettes => dispatch(addPalettes(palettes)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

