import React from "react";

const Tile = props => {
  const { selected, letter, handleClick } = props;

  return (
    <button className={selected ? "tile-selected" : "tile"} onClick={handleClick}>
      {letter}
    </button>
  );
};

export default Tile;
