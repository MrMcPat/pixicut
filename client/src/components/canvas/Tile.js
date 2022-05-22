import React, { useState } from "react";
import "./Tile.css";

function Tile({ isMouseDown, color }) {
  const [background, setBackground] = useState("#ffffff");

  const handleMouseMove = () => isMouseDown && setBackground(color);
  const handleClick = () => setBackground(color);

  return (
    <div
      className="tile"
      style={{ background: background }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    ></div>
  );
}

export default Tile;
