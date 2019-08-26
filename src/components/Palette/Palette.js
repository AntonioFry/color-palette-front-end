import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Palette extends Component {

removePalette = (e) => {
  e.preventDefault()
  deletePalette(this.props.palette.palette_id)
}

  render() {

    const cardColor = {
      backgroundColor: `#this.props.color`,
    }


    return (
      <div>
        <h2>{this.props.palette.palette_name}</h2>
        <div style={cardColor}></div>
        <div style={cardColor}></div>
        <div style={cardColor}></div>
        <div style={cardColor}></div>
        <div style={cardColor}></div>
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
