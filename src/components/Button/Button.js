import React from 'react';
import './Button.css';

function Button({text}) {
  return (
    <div className='btn-box'>
      <button className='btn'>{text}</button>
    </div>
  )
}

export default Button;
