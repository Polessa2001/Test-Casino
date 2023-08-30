import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <a>{props.title}</a>
  );
}

export default Button;
