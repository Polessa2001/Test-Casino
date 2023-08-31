import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <a href ="#" style={{ backgroundColor: props.color, fontSize: props.font, padding: props.padding}} className="button">{props.title}</a>
  );
}

export default Button;
