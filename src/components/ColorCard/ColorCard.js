import React, { Component } from 'react'

export default class ColorCard extends Component {
constructor() {
  super()
  this.state = {
    locked: false
  }
}

  render() {

const cardColor = {
  backgroundColor: this.props.palette,
}

const changeLock = () => {
  // let icon;
   this.setState({ locked: !this.state.locked })
  //  if(this.state.locked){
  //    icon = <i class="fas fa-lock"></i>
  //  } else {
  //   icon = <i class="fas fa-lock-open"></i>
  //  }
  //  return icon;
}

    return (
      <div style={cardColor}>
        <p>{this.props.color}</p>
        <button onClick={this.changeLock}></button>
      </div>
    )
  }
}
