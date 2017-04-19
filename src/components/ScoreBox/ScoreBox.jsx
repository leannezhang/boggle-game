import React from 'react'
import WordScoreList from './WordScoreList'

const ScoreBox = (props) => {
  const {wordList, totalScore} = props
  const words = Object.keys(wordList)
  const scores = Object.values(wordList)

  return (
    <div className="score-box">
      <WordScoreList words={words} scores={scores} totalScore={totalScore}/>
    </div>
  )
}

export default ScoreBox