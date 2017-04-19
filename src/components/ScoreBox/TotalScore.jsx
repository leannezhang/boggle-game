import React from 'react'
const TotalScore = ({totalScore}) => {
  return (
    <div className="total-score">
      <h2>Total Score</h2>
      <span>{totalScore}</span>
    </div>
  )
}

export default TotalScore