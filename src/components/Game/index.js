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
    // TODO 1): Set data props
    // TODO 4): Change data props to states
    this.state = {
      board: this.initBoard,
    };
  }

  // Tile Clicked
  handleClick(rowId, columnId) {
    // TODO 4): Handle tile click to select / unselect tile.
  }

  // Adds Current Word to the Word List
  handleSubmit(word) {
    // TODO 4): Check if Current Word is valid
  }

  render() {
    return (
      <div>
        <div className="game-area">
          <Board
            board={this.state.board}
            // TODO 4): Pass Board onClick callback as props
          />
          <CurrentWord
            // TODO 1): Pass CurrentWord props
          />
          <Button
            // TODO 1): Pass Button Prop
            // TODO 4): Pass Button Callback
          />
        </div>

        <ScoreBox
          // TODO 2): Pass ScoreBox Props
          // TODO 3): Calculate Score using reduce
        />
        {/* Makes Board and ScoreBox be side by side */}
        <div className="clear" />

      </div>
    );
  }
}
