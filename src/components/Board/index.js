import React from 'react';
import Tile from './Tile';
import './Board.css';

const Board = props => {
  // TODO: Destructure Board props
  const { board, handleClick } = props;
  return (
    <div className="orange-area">
      {board.map((row, index) => {
        return (
          <div className="row" key={index}>
            {row.map(tile => {
              return (
                <Tile
                  // TODO: Pass props to describe state of the tile
                  // Pass callback function props when user clicks on Tile
                  selected={tile.selected}
                  letter={tile.letter}
                  key={tile.columnId}
                  handleClick={handleClick.bind(
                    this,
                    tile.rowId,
                    tile.columnId
                  )}
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
