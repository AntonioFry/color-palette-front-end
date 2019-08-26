import React, { Component } from 'react';
import { getProjects, getPalettes } from '../../Utils/API/apiCalls';
import './App.css';
import ProjectForm from '../ProjectForm/ProjectForm';
import { connect } from 'react-redux'
import { addProject, addPalette } from '../../actions';

export class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  componentDidMount = async () => {
    try {
      const projects = await getProjects();
      const palettes = await getPalettes();

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
      </main>
    )
  }
}

const mapStateToProps = () => ({
  projects,
  palettes
})

const mapDispatchToProps = dispatch => {
  addProject(project => dispatch(addProject(project))),
  addPalette(palette => dispatch(addPalette(palette)))
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

