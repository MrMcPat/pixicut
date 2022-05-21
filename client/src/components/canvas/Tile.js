import React, { useState } from "react";
import "./Tile.css";

function Tile({ isMouseDown }) {
  const [color, setColor] = useState("");

  const handleMouseMove = () => isMouseDown && setColor("black");
  const handleClick = () => setColor("black");

  return (
    <div
      className="tile"
      style={{ background: color }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    ></div>
  );
}

export default Tile;
