import React from 'react';

const CurrentWord = props => {
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
