import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removePalette } from '../../actions';
import { deletePalette } from '../../Utils/API/apiCalls';

export class Palette extends Component {

removePalette = (e) => {
  e.preventDefault()

  removePalette(this.props.palette.palette_id)
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
        <button onClick={this.removePalette}><i class="far fa-trash-alt"></i></button>
      </div>
    )
  }
}

const mapStateToProps = ({ palette }) => ({

})


const mapDispatchToProps = dispatch => ({
  removePalette: (palette => dispatch(removePalette(palette)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Palette)
