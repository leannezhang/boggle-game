import React from 'react';
import './Tile.css';

const Tile = props => {
  // TODO: Destructure Tile props
  const selected = false;
  return (
    <button
      className={selected ? 'tile-selected' : 'tile'}
      // TODO: Pass button onClick callback as props
    >
      {/* TODO: Render letter */}
      A
    </button>
  );
};

export default Tile;
