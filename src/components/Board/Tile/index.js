import React from 'react';
import './Tile.css';

const Tile = props => {
  const { selected, letter, handleClick } = props;

  return (
    <button
      className={selected ? 'tile-selected' : 'tile'}
      onClick={handleClick}
    >
      {letter}
    </button>
  );
};

export default Tile;
