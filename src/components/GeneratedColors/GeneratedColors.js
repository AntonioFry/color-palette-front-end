import React, { Component } from 'react'
import ColorCard from '../ColorCard/ColorCard';

export default class GeneratedColors extends Component {

createCard = () => {
  for(var i = 0; i < this.props.palettes.length; i++){
    this.props.palettes.map(palette => {
    return <ColorCard palette={`palette.color_${i}`}/>;
  });
  }
}

  render() {
    return (
      <div>
        {this.createCard()}
      </div>
    )
  }
}
