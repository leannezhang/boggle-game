import React from 'react';
import './Button.css';

const Button = props => {
  // TODO: Destructure Button props
  const { handleSubmit, label } = props;

  return (
    <button
      className="button"
      // TODO: Handle on click callback
      onClick={handleSubmit}
    >
      {/* TODO: render button label */}
      {label}
    </button>
  );
};

export default Button;
