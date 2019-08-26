import React, { Component } from 'react';
import { getProjects, getPalettes } from '../../Utils/API/apiCalls';
import './App.css';
import ProjectForm from '../ProjectForm/ProjectForm';
import { connect } from 'react-redux'
import { addProjects, addPalettes } from '../../actions';
import GeneratedColors from '../GeneratedColors/GeneratedColors';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    }
  }
  
  componentDidMount = async () => {
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
          <h1>Palette Picker</h1>
        </header>
        {/* need to create loading comp and change based on api  */}
        <ProjectForm/>
        <GeneratedColors/>
      </main>
    )
  }
}

const mapStateToProps = ({ projects, palettes }) => ({
  projects,
  palettes
})

const mapDispatchToProps = dispatch => ({
  addProjects: (projects => dispatch(addProjects(projects))),
  addPalettes: (palettes => dispatch(addPalettes(palettes)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

