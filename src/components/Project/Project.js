import Palette from '../Palette/Palette';
import React from 'react';
import './Project.css';
import { removeProject } from '../../actions';
import { deleteProject } from '../../Utils/API/apiCalls';
import { connect } from 'react-redux'

export function Project(props) {
  const paletteCards = props.palettes.map(palette => {
    return <Palette {...palette} />
  })

  return (
    <article className="project">
      <div className="project-name-container">
          <h2 className="project-name">{props.name}</h2>
          <button className="rmvBtn"onClick={() => deleteProject(props.id, props.removeProject(props.id))}><i class="far   fa-trash-alt"></i></button>
      </div>
     {!props.palettes.length ? <p className="noPalettesMessage">No Palettes Yet</p> : paletteCards}
    </article>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  removeProject: id => dispatch(removeProject(id))
})
  
export default connect(null, mapDispatchToProps)(Project);