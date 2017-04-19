import React from 'react'

const Tile = (props) => {

  const {selected, letter, handleClick} = props;

  return (
      <div className={selected ? 'tile-selected' : 'tile'} onClick={handleClick}>
        <div>{letter}</div>
      </div>
  )
}

export default Tile