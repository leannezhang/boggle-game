import React, { Component } from 'react';
import { shuffleBoard, copyBoard } from '../../util/shuffleBoard';
import Board from '../Board';
import ScoreBox from '../ScoreBox';
import CurrentWord from '../CurrentWord';
import Button from '../Button';
import TileData from '../../data/TileData';
import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initBoard = shuffleBoard();
    this.state = {
      board: this.initBoard,
      currentWord: '',
      currentWordPosition: [],
      wordScoreList: {}
    };
  }
  isTileEqual(tile1, tile2) {
    if (!tile1 || !tile2) return false;
    return tile1.rowId === tile2.rowId && tile1.columnId === tile2.columnId;
  }
  isAdjacent(tile1, tile2) {
    if (!tile1 || !tile2) return false;
    if (this.isTileEqual(tile1, tile2)) {
      return false;
    }

    const colDiff = Math.abs(tile1.columnId - tile2.columnId);
    const rowDiff = Math.abs(tile1.rowId - tile2.rowId);
    if (colDiff <= 1 && rowDiff <= 1) {
      return true;
    } else {
      return false;
    }
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
    const selectedTile = this.state.board[rowId][columnId];
    const lastSelectedTile = this.state.currentWordPosition[
      this.state.currentWordPosition.length - 1
    ];
    if (selectedTile.selected) {
      // Check if selectedTile is last tile
      if (this.isTileEqual(selectedTile, lastSelectedTile)) {
        // Unselected selectedTile and remove from currentWordPosition
        // Also update the board to set the tile to unselected
        const newBoard = copyBoard(this.state.board);
        newBoard[rowId][columnId].selected = false;
        this.setState({
          currentWord: this.state.currentWord.slice(0, -1),
          board: newBoard,
          currentWordPosition: this.state.currentWordPosition.slice(0, -1)
        });
      }
    } else {
      if (
        !lastSelectedTile || this.isAdjacent(selectedTile, lastSelectedTile)
      ) {
        // Select the tile
        const newBoard = copyBoard(this.state.board);
        newBoard[rowId][columnId].selected = true;
        this.setState({
          // update current word with selected tile
          currentWord: this.state.currentWord.concat(
            newBoard[rowId][columnId].letter
          ),
          // update board
          board: newBoard,
          // update current word position with selected tile position
          currentWordPosition: this.state.currentWordPosition.concat({
            rowId: rowId,
            columnId: columnId
          })
        });
      }
    }
  }

  calculateScore(word) {
    const score = word.length - 2;

    if (score < 1) {
      return 1;
    }
    if (score > 6) {
      return 6;
    }
    return score;
  }

  // 1. Submit a current word
  // 2. Create a wordlist
  // 3. Calculate total score
  // 4. Clear board

  handleSubmit(word) {
    // Check if word is valid
    if (word.length < 3 || this.state.wordScoreList[word]) {
      return;
    }
    const score = this.calculateScore(word);

    const clearedBoard = this.initBoard;

    this.setState({
      // wordScoreList: Object.assign(this.state.wordScoreList, {[word]: score}),
      wordScoreList: { ...this.state.wordScoreList, [word]: score },
      currentWord: '',
      currentWordPosition: [],
      board: clearedBoard
    });
  }

  render() {
    return (
      <div>
        <div className="game-area">
          <Board board={this.state.board} handleClick={this.handleClick} />
          <CurrentWord
            currentWord={this.state.currentWord}
            label="Current Word"
          />
          <Button
            handleSubmit={this.handleSubmit.bind(this, this.state.currentWord)}
            label="SUBMIT WORD"
          />
        </div>

        <ScoreBox
          wordScoreList={this.state.wordScoreList}
          totalScore={Object.values(
            this.state.wordScoreList
          ).reduce((totalScore, next) => {
            return totalScore + next;
          }, 0)}
        />

        <div className="clear" />

      </div>
    );
  }
}
