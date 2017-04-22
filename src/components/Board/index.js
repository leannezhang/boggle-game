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
                  selected={tile.selected}
                  letter={tile.letter}
                  key={tile.columnId}
                  // TODO: Pass callback function props when user clicks on Tile
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
