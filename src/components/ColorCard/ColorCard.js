import React, { Component } from 'react'

export default class ColorCard extends Component {
  render() {

const cardColor = {
  backgroundColor: `#this.props.color`,
}

    return (
      <div style={cardColor}>
        <p>{this.props.color}</p>
        <i class="fas fa-lock"></i>
        <i class="fas fa-lock-open"></i>
        {/* conditionally render locks*/}
      </div>
    )
  }
}
