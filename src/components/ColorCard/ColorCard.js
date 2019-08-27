import React, { Component } from 'react'

export class ColorCard extends Component {
constructor() {
  super()
  this.state = {
    locked: false
  }
}

changeLock = (e) => {
  e.preventDefault();
  // let icon;
  this.setState({ locked: !this.state.locked })
  //  if(this.state.locked){
    //    icon = <i class="fas fa-lock"></i>
    //  } else {
      //   icon = <i class="fas fa-lock-open"></i>
      //  }
      //  return icon;
    }

  render() {
    const cardColor = {
      backgroundColor: this.props.hexValue,
    }
    return (
      <div style={cardColor} className='color-card'>
        <p>{this.props.hexValue}</p>
        <button onClick={(e) => this.changeLock(e)}></button>
      </div>
    )
  }
}

export default ColorCard;