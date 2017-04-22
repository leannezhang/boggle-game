import React from 'react';
import WordScoreList from './WordScoreList';
import './ScoreBox.css';

const ScoreBox = props => {
  // TODO: Destructure ScoreBox props

  return (
    <div className="score-box">
      <WordScoreList
        // TODO: Pass all WordScoreList props
      />
    </div>
  );
};

export default ScoreBox;
