import React from "react";

const Button = props => {
  const { handleSubmit } = props;

  return (
    <button className="button" onClick={handleSubmit}>
      SUBMIT WORD
    </button>
  );
};
export default Button;
