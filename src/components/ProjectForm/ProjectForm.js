import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProjectForm extends Component {
  render() {
    return (
      <div>
        <label for="projectInput">Project Name</label>
        <input />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
