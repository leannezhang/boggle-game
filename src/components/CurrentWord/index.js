import React from 'react';
import './CurrentWord.css';

const CurrentWord = props => {
  // TODO 1): Destructure CurrentWord props
  const {currentWord} = props;

  return (
    <div className="word-area">
      <div className="current-header">
        {/* TODO 1): Render label */}
        Current Word
      </div>
      <div className="current-word">
        {/* TODO 1): Render currentWord */}
        {currentWord}
      </div>
    </div>
  );
};

export default CurrentWord;
