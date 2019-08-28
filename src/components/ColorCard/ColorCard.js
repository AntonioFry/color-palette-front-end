import React, { Component } from 'react'
import './ColorCard.css';

export class ColorCard extends Component {
  constructor() {
    super()
    this.state = {
      locked: false
    }
  }

  changeLock = (e) => {
    e.preventDefault();
    let icon;
    this.setState({ locked: !this.state.locked })
    if (this.state.locked){
      icon = <i class="fas fa-lock"></i>
    } else {
      icon = <i class="fas fa-lock-open"></i>
    }
    return icon;
  }

  render() {
    const cardColor = {
      backgroundColor: this.props.hexValue,
    }

    const icon = !this.state.locked ? 
    <i class="fas fa-lock-open" onClick={(e) => this.changeLock(e)}></i> : 
    <i class="fas fa-lock" onClick={(e) => this.changeLock(e)}></i>;

    return (
      <div style={cardColor} className='color-card'>
        <p className="card-hex-value">{this.props.hexValue.toUpperCase()}</p>
        {icon}
      </div>
    )
  }
}

export default ColorCard;