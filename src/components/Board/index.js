import React from 'react';
import Tile from './Tile';
import './Board.css';

const Board = props => {
  // TODO 1): Destructure Board props
  const { board } = props;
  return (
    <div className="orange-area">
      {board.map((row, index) => {
        return (
          <div className="row" key={index}>
            {row.map((tile, index) => {
              return (
                <Tile
                  // TODO 1): Pass props to describe state of the tile
                  key={index}
                  // TODO 4): Pass callback function props when user clicks on Tile
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
