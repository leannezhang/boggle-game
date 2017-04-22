import React from 'react';
import TotalScore from './TotalScore';
const WordScoreList = props => {
  // TODO 2): Destructure WordScoreList props
  return (
    <div>
      <div className="word-list">
        <div className="words">
          <h2>WORD</h2>
          {/* TODO: 2) Render wordList array */}
          <li>Hello</li>
          <li>React</li>
          <li>Vancouver</li>
        </div>
        <div className="scores">
          <h2>SCORE</h2>
          {/* TODO: 2) Render scoreList array */}
          <li>3</li>
          <li>3</li>
          <li>7</li>
        </div>
      </div>
      <TotalScore
        // TODO: 3) Pass TotalScore props
      />
    </div>
  );
};

export default WordScoreList;
