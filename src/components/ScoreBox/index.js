import React from 'react';
import WordScoreList from './WordScoreList';
import './ScoreBox.css';

const ScoreBox = props => {
  // TODO: Destructure ScoreBox props
  const { wordScoreList, totalScore } = props;

  return (
    <div className="score-box">
      <WordScoreList
        // TODO: Pass all WordScoreList props
        wordScoreList={wordScoreList}
        totalScore={totalScore}
      />
    </div>
  );
};

export default ScoreBox;
