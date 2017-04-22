import React from 'react';
import WordScoreList from './WordScoreList';
import './ScoreBox.css';

const ScoreBox = props => {
  // TODO 2): Destructure ScoreBox props

  return (
    <div className="score-box">
      <WordScoreList
        // TODO 2): Pass all WordScoreList props
      />
    </div>
  );
};

export default ScoreBox;
