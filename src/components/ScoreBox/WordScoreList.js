import React from 'react';
import TotalScore from './TotalScore';
const WordScoreList = props => {
  // TODO: Destructure WordScoreList props
  const { wordScoreList, totalScore } = props;
  const words = Object.keys(wordScoreList);

  const wordsList = words.map(function(word, index) {
    return <li key={index}>{word}</li>;
  });
  const scores = Object.values(wordScoreList);
  const scoresList = scores.map(function(score, index) {
    return <li key={index}>{score}</li>;
  });

  return (
    <div>
      <div className="word-list">
        <div className="words">
          <h2>WORD</h2>
          {wordsList}
        </div>
        <div className="scores">
          <h2>SCORE</h2>
          {scoresList}
        </div>
      </div>
      <TotalScore totalScore={totalScore} label="Total Score" />
    </div>
  );
};

export default WordScoreList;
