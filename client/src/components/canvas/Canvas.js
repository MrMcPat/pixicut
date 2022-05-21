import React, { useState, useEffect } from "react";
import "./Canvas.css";
import Tile from "./Tile";

function Canvas() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < 64; i++) {
      array.push(i);
    }
    setTiles(array);
  }, []);

  console.log(tiles);

  return (
    <div>
      <div className="eightbyeight-container">
        {tiles.map((tile) => (
          <Tile key={tile} />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
