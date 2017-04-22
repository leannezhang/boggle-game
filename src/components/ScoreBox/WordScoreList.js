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
          {/* TODO: Render wordList array */}
          {wordsList}
        </div>
        <div className="scores">
          <h2>SCORE</h2>
          {/* TODO: Render scoreList array */}
          {scoresList}
        </div>
      </div>
      <TotalScore
        // TODO: Pass TotalScore props
        totalScore={totalScore}
        label="Total Score"
      />
    </div>
  );
};

export default WordScoreList;
