import React, { Component } from 'react'
import ColorCard from '../ColorCard/ColorCard';
import { setCurrentColors } from '../../actions';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import './GeneratedColors.css';

export class GeneratedColors extends Component {

  generateNewPalette = (e) => {
    e.preventDefault();
    const currentColors = [];
    for (let i = 0; i < 5; i++) {
      const newColor = randomColor();
      currentColors.push({ locked: false, newColor });
    }
    this.props.setCurrentColors(currentColors);
  }

  render() {
    const colorCards = this.props.currentColors.map((color, i) => {
      return (
      <ColorCard
        hexValue={color.newColor}
        key={i + 1}
        id={i + 1}
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