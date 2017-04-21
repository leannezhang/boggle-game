import React from 'react';
import WordScoreList from './WordScoreList';
import './ScoreBox.css';

const ScoreBox = props => {
  const { wordScoreList, totalScore } = props;

  return (
    <div className="score-box">
      <WordScoreList wordScoreList={wordScoreList} totalScore={totalScore} />
    </div>
  );
};

export default ScoreBox;
