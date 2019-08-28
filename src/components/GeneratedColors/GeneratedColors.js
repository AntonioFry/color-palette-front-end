import React, { Component } from 'react'
import ColorCard from '../ColorCard/ColorCard';
import { setCurrentColors } from '../../actions';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import './GeneratedColors.css';

export class GeneratedColors extends Component {
  
  componentDidMount() {
    const startingColors = [
      { id: 1, locked: false, newColor: randomColor() },
      { id: 2, locked: false, newColor: randomColor() },
      { id: 3, locked: false, newColor: randomColor() },
      { id: 4, locked: false, newColor: randomColor() },
      { id: 5, locked: false, newColor: randomColor() }
    ]
    this.props.setCurrentColors(startingColors);
  }

  generateNewPalette = () => {
    const currentColors = this.props.currentColors.map(color => {
      if (color.locked === true) {
        return color
      } else {
        color.newColor = randomColor();
        return color
      }
    })
    this.props.setCurrentColors(currentColors);
  }

  render() {
    const colorCards = this.props.currentColors.map((color, i) => {
      return (
      <ColorCard
        hexValue={color.newColor}
        key={color.id}
        id={color.id}
        locked={color.locked}
      /> 
      )
    })
    return (
      <section className="generated-colors-section">
        <div className="color-cards-container">
          {colorCards}
        </div>
        <button className="generate-colors-button" onClick={(e) => this.generateNewPalette(e)}>Generate New Palette</button>
      </section>
    )
  }
}

export const mapStateToProps = (store) => ({
  palettes: store.palettes,
  currentColors: store.currentColors
})

export const mapDispatchToProps = (dispatch) => ({
  setCurrentColors: colors => dispatch(setCurrentColors(colors))
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedColors);