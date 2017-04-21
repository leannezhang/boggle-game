import React from 'react';
const TotalScore = props => {
  const { totalScore, label } = props;
  return (
    <div className="total-score">
      <h2>{label}</h2>
      <span>{totalScore}</span>
    </div>
  );
};

export default TotalScore;
