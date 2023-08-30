import React from 'react'
import './CircularButton.css';

const CircularButton = (props) => {
  return (
    <a href="#" class="circular-button" style = {{backgroundColor: props.color}}><span>{props.action}</span></a>
  )
}

export default CircularButton
