import React, { Component } from 'react'
import {shuffleBoard, copyBoard} from './Common/shuffleBoard'
import Board from './Board'
import ScoreBox from './ScoreBox'
import CurrentWord from './CurrentWord'
import './Game.css'
class Game extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initBoard = shuffleBoard();
    this.surroundingCells = [
      {r:-1, c:-1},
      {r:-1, c:0},
      {r:-1, c:1},
      {r:0, c:-1},
      {r:0, c:1},
      {r:1, c:-1},
      {r:1, c:0},
      {r:1, c:1}];
    this.state = {
      board: this.initBoard,
      currentWord: '',
      currentWordPosition: [],
      wordList: {},
      totalScore: 0
    };
  }
  // 1. click on the tile
  // 2. update tile selected to true.
  // 2.1 Can select and unselect the tile
  // 2.2 Can only unselect the last tile
  // 2.3 Update currentWord as we select and unselect
  // 2.4. Can only select the surrounding cells
  // 2.5 Make a copy of board, word, currentWordPositions, etc
  // 2.6 Mutate the state
  // 3. render the board with updated tile so it renders as active
  handleClick(rowId, columnId) {
    const selected = this.state.board[rowId][columnId].selected;
    let currentWord = this.state.currentWord;
    let newCurrentWordPosition = this.state.currentWordPosition.slice();
    const lastLetter = newCurrentWordPosition[newCurrentWordPosition.length - 1];

    if (this._tileClickedIsLastSelected(selected, rowId, columnId, lastLetter)) {
      const newBoard = copyBoard(this.state.board);
      newBoard[rowId][columnId].selected = false;
      currentWord = this.state.currentWord.slice(0, -1);
      newCurrentWordPosition = newCurrentWordPosition.slice(0, -1);

      this.setState({
        currentWord,
        board : newBoard,
        currentWordPosition: newCurrentWordPosition
      });
    } else if (this._surroundingTileIsClicked(selected, rowId, columnId, lastLetter)) {

      const newBoard = copyBoard(this.state.board);
      newBoard[rowId][columnId].selected = true;
      newCurrentWordPosition.push({rowId: rowId, columnId: columnId});
      currentWord = this.state.currentWord.concat(newBoard[rowId][columnId].letter);

      this.setState({
        currentWord,
        board : newBoard,
        currentWordPosition: newCurrentWordPosition
      });
    }
  };

  _tileClickedIsLastSelected(selected, rowId, columnId, lastLetter) {
    return selected && rowId === lastLetter.rowId && columnId === lastLetter.columnId;
  }

  _surroundingTileIsClicked(selected, rowId, columnId, lastLetter) {
    return !selected && this._isSurroundingTile(rowId, columnId, lastLetter);
  }


  _isSurroundingTile(rowId, columnId, lastLetter) {
    if (!lastLetter) {
      return true;
    }
    return this.surroundingCells.some(function(offset) {
      if (rowId === (offset.r + lastLetter.rowId) && columnId === (offset.c + lastLetter.columnId)) {
        return true;
      }
      return false;
    });
  }

  calculateScore(word) {
    if (word.length >= 3 && word.length <= 8) {
      return word.length - 2
    } else if (word.length > 8) {
      return 6
    } else {
      return 1
    }
  }

  // 1. Submit a current word
  // 2. Create a wordlist
  // 3. Calculate total score
  // 4. Clear board

  handleSubmit(word) {

    const mergeWordList = Object.assign({}, this.state.wordList);

    if ( word.length > 0 && !mergeWordList[word] ) {
      mergeWordList[word] = this.calculateScore(word);
      const totalScore = this.state.totalScore +  mergeWordList[word];
      const clearedBoard = this.initBoard;

      this.setState({
        wordList: mergeWordList,
        currentWord: '',
        currentWordPosition: [],
        totalScore : totalScore,
        board: clearedBoard
      })
    }
  }

  render() {
    return (
      <div>
        <div className="game-area">
          <Board board={this.state.board} handleClick={this.handleClick}/>
          <CurrentWord currentWord={this.state.currentWord} handleSubmit={this.handleSubmit}/>
        </div>

        <ScoreBox wordList={this.state.wordList} totalScore={this.state.totalScore} />

        <div className="clear">
        </div>

      </div>
    )
  }
}

export default Game