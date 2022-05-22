import React from "react";
import Tile from "./Tile";

function Grid({ tiles, isMouseDown, color }) {
  return (
    <>
      {tiles.map((tile) => (
        <Tile key={tile} isMouseDown={isMouseDown} color={color} />
      ))}
    </>
  );
}

export default Grid;
