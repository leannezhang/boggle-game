import React from 'react';

const Button = props => {
  const { handleSubmit, label } = props;

  return (
    <button className="button" onClick={handleSubmit}>
      {label}
    </button>
  );
};

export default Button;
