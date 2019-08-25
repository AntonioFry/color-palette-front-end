import React, { Component } from 'react';
import { getProjects, getPalettes } from '../../Utils/API/apiCalls';
import { setProjects, setPalettes } from '../../actions';
import { connect } from 'react-redux';
import './App.css';
import ProjectForm from '../ProjectForm/ProjectForm';

export class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  componentDidMount = async () => {
    try {
      const projects = await getProjects();
      this.props.setProjects(projects);
      const palettes = await getPalettes();
      this.props.setPalettes(palettes);
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

export const mapDispatchToProps = (dispatch) => ({
  setProjects: projects => dispatch(setProjects(projects)),
  setPalettes: palettes => dispatch(setPalettes(palettes))
})

export default connect(null, mapDispatchToProps)(App);
