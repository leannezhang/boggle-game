import React from 'react';

const Button = props => {
  const { handleSubmit, children } = props;

  return (
    <button className="button" onClick={handleSubmit}>
      {children}
    </button>
  );
};

export default Button;
