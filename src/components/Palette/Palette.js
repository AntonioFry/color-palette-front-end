import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePalette } from '../../actions';

export class Palette extends Component {

removePalette = (e) => {
  e.preventDefault()
  deletePalette(this.props.palette.palette_id)
}

  render() {
    return (
      <div>
        <h2>{this.props.palette.palette_name}</h2>
        <div style={{backgroundColor: this.props.color_1}}></div>
        <div style={{backgroundColor: this.props.color_2}}></div>
        <div style={{backgroundColor: this.props.color_3}}></div>
        <div style={{backgroundColor: this.props.color_4}}></div>
        <div style={{backgroundColor: this.props.color_5}}></div>
        <button onClick={this.removePalette}>🗑</button>
      </div>
    )
  }
}

const mapStateToProps = ({palette}) => {
  palette
}


const mapDispatchToProps = dispatch => {
  deletePalette: (palette => dispatch(deletePalette(palette)))
}

export default connect(mapStateToProps, mapDispatchToProps)(Palette)
