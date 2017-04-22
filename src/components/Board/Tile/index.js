import React from 'react';
import './Tile.css';

const Tile = props => {
  // TODO: Destructure Tile props
  const { selected, letter, handleClick } = props;

  return (
    <button
      className={selected ? 'tile-selected' : 'tile'}
      // TODO: Pass button onClick callback as props
      onClick={handleClick}
    >
      {/* TODO: Render letter */}
      {letter}
    </button>
  );
};

export default Tile;
