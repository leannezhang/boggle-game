import React from 'react';
import './CurrentWord.css';

const CurrentWord = props => {
  // TODO: Destructure CurrentWord props
  const { currentWord, label } = props;

  return (
    <div className="word-area">
      <div className="current-header">
        {label}
      </div>
      <div className="current-word">
        {currentWord}
      </div>
    </div>
  );
};

export default CurrentWord;
