import React from 'react';
import './Button.css';

const Button = props => {
  // TODO 1) : Destructure Button props
  const {label} = props;
  return (
    <button className="button"
      // TODO 5) : Handle on click callback
    >
      {/* TODO 1): Render button label */}
      {label}
    </button>
  );
};

export default Button;
