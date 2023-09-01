import React from 'react'
import './CircularButton.css';

const CircularButton = (props) => {
  return (
    <button onClick={props.onClick}className="circular-button" style = {{backgroundColor: props.color}}><span dangerouslySetInnerHTML={{ __html: props.action }} /></button>
  )
}

export default CircularButton
