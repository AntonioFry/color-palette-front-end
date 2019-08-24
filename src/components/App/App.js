import React, { Component } from 'react';
import { getProjects, getPalettes } from '../../../API/apiCalls';
import './App.css';

class App extends Component {
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
      </main>
    )
  }
}

export default App;
