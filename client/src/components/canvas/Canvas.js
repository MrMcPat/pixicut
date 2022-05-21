import React, { useState, useEffect } from "react";
import "./Canvas.css";
import Tile from "./Tile";

function Canvas() {
  const [tiles, setTiles] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < 64; i++) {
      array.push(i);
    }
    setTiles(array);
  }, []);

  const handleMouseDown = () => setIsMouseDown(true);
  const handleMouseUp = () => setIsMouseDown(false);

  return (
    <div>
      <div
        className="eightbyeight-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {tiles.map((tile) => (
          <Tile key={tile} isMouseDown={isMouseDown} />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
