import React from 'react';

const CurrentWord = props => {
  const { currentWord } = props;

  return (
    <div className="word-area">
      <div className="current-header">
        Current Word
      </div>
      <div className="current-word">
        {currentWord}
      </div>
    </div>
  );
};

export default CurrentWord;
