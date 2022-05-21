import React from "react";
import "./Canvas.css";
import Tile from "./Tile";

function Canvas() {
  return (
    <div>
      <div className="eightbyeight-container">
        <Tile />
      </div>
    </div>
  );
}

export default Canvas;
