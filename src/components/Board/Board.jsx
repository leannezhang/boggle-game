import React from 'react'
import Tile from './Tile'


const Board = (props) => {

  const {board, handleClick} = props;
  return (
    <div className="orange-area">
      {
        board.map((row, index) => {
          return (
            <div className="row" key={index}>
              {
                row.map((tile) => {
                  return (<Tile selected={tile.selected} letter={tile.letter} key={tile.columnId} handleClick={handleClick.bind(this, tile.rowId, tile.columnId)}/>)
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Board