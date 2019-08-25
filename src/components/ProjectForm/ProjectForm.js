import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      projectName: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <label for="projectInput">Project Name</label>
        <input
          value={this.state.projectName}
          name='projectName'
          placeholder='Name new project'
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
