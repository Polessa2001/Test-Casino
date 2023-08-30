import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <a href ="#" style={{ backgroundColor: props.color, fontSize: props.font}} className="button">{props.title}</a>
  );
}

export default Button;
