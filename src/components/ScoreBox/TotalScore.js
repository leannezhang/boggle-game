import React from 'react';
const TotalScore = props => {
  // TODO: Destructure TotalScore props
  const { totalScore, label } = props;
  return (
    <div className="total-score">
      {/* TODO: Render label */}
      <h2>{label}</h2>
      {/* TODO: Render totalScore */}
      <span>{totalScore}</span>
    </div>
  );
};

export default TotalScore;
