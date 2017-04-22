import React from 'react';
import './CurrentWord.css';

const CurrentWord = props => {
  // TODO: Destructure CurrentWord props
  return (
    <div className="word-area">
      <div className="current-header">
        {/* TODO: Render label */}
        Current Word
      </div>
      <div className="current-word">
        {/* TODO: Render currentWord */}
        REACT
      </div>
    </div>
  );
};

export default CurrentWord;
