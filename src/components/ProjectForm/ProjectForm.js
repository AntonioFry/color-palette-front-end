import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProject} from '../../actions';

export class ProjectForm extends Component {


// handleSubmit = (e) => {
//   e.preventDefault()
//   // const project = {
//   //   name: 
//   // }
//   addProject(project)
// }
//how to pass project?
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="project">Project Name</label>
        <input type="text" placeholder="name your project" name="project" onChange={this.handleChange}/>
        <input type="submit" value="create project"/>
      </form>
    )
  }
}

const mapStateToProps = ({project}) => ({
  project
})

const mapDispatchToProps = dispatch => ({
  addProject: (project => dispatch(addProject(project)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
