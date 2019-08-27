import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removePalette } from '../../actions';
import { deletePalette } from '../../Utils/API/apiCalls';
import './Palette.css';

export class Palette extends Component {

removePalette = (e) => {
  e.preventDefault()

  removePalette(this.props.palette.palette_id)
}

  render() {
    console.log(this.props)
    return (
      <article className='project-palette-container'>
          <h2 className="palette-name">{this.props.palette_name}</h2>
        <div className="project-palette">
          <button className="dltBtn" onClick={this.removePalette}><i class="far   fa-trash-alt"></i></button>
          <div className="project-color" style={{backgroundColor: this.props.color_1}}></div>
          <div className="project-color" style={{backgroundColor: this.props.color_2}}></div>
          <div className="project-color" style={{backgroundColor: this.props.color_3}}></div>
          <div className="project-color" style={{backgroundColor: this.props.color_4}}></div>
          <div className="container project-color">
          <div className="paint" style={{backgroundColor: this.props.color_5}}>
          </div>
            <div className="roller">
            <div className="roll" style={{backgroundColor: this.props.color_5}}></div>
            <div className="handle"></div>
            <div className="grip"></div>
         </div>
        </div>
        </div>
      </article>
    )
  }
}

const mapStateToProps = ({ palette }) => ({

})


const mapDispatchToProps = dispatch => ({
  removePalette: (palette => dispatch(removePalette(palette)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Palette)
