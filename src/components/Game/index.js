import React, { Component } from 'react';
import {
  shuffleBoard,
  copyBoard,
  isTileEqual,
  isAdjacent,
  calculateScore
} from '../../util/gameUtil';
import Board from '../Board';
import ScoreBox from '../ScoreBox';
import CurrentWord from '../CurrentWord';
import Button from '../Button';
import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.initBoard = shuffleBoard();
    // TODO: Init state with the board
    this.state = {
      board: this.initBoard,
    };
  }

  // Tile Clicked
  handleClick(rowId, columnId) {
    // TODO: Handle tile click to select / unselect tile.
  }

  // Adds Current Word to the Word List
  handleSubmit(word) {
    // TODO: Check if Current Word is valid
  }

  render() {
    return (
      <div>
        <div className="game-area">
          <Board
            board={this.state.board}
            // TODO: Pass Board onClick callback as props
          />
          <CurrentWord
            // TODO: Pass CurrentWord props
          />
          <Button
            // TODO: Pass Button Props and Button Callback
          />
        </div>

        <ScoreBox
          // TODO: Pass ScoreBox Props
        />
        {/* Makes Board and ScoreBox be side by side */}
        <div className="clear" />

      </div>
    );
  }
}
