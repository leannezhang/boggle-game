import React from "react";
import TotalScore from "./TotalScore";
const WordScoreList = props => {
  const { words, scores, totalScore } = props;

  const wordsList = words.map(function(word, index) {
    return <li key={word.toString() + index}>{word}</li>;
  });

  const scoresList = scores.map(function(score, index) {
    return <li key={score.toString() + index}>{score}</li>;
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
      <TotalScore totalScore={totalScore} />
    </div>
  );
};

export default WordScoreList;
