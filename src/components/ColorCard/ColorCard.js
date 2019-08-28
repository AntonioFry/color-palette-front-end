import React from 'react'
import './ColorCard.css';
import { lockingColor } from '../../actions';
import { connect } from 'react-redux';

export const ColorCard = (props) => { 
  const cardColor = {
    backgroundColor: props.hexValue,
  }
  const icon = !props.locked ? 
  <i class="fas fa-lock-open" onClick={() => props.lockingColor(props.id)}></i> : 
  <i class="fas fa-lock" onClick={() => props.lockingColor(props.id)}></i>;

  return (
    <div style={cardColor} className='color-card'>
      <p className="card-hex-value">{props.hexValue.toUpperCase()}</p>
      {icon}
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  lockingColor: id => dispatch(lockingColor(id))
})

export default connect(null, mapDispatchToProps)(ColorCard);