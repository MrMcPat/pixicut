import React, { useState, useEffect } from "react";
import "./Canvas.css";
import CanvasInputs from "./CanvasInputs";
import Grid from "./Grid";

function Canvas() {
  const [name, setName] = useState("");
  const [frames, setFrames] = useState("");
  const [color, setColor] = useState("#000000");
  const [pixelCount, setPixelCount] = useState(64);
  const [tiles, setTiles] = useState([]);
  const [dimensions, setDimensions] = useState("eightbyeight-container");
  const [isMouseDown, setIsMouseDown] = useState(false);

  console.log(color);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < pixelCount; i++) {
      array.push(i);
    }
    setTiles(array);
    if (pixelCount === 64) {
      setDimensions("eightbyeight-container");
    } else {
      setDimensions("sixteenbysixteen-container");
    }
  }, [pixelCount]);

  const handleMouseDown = () => setIsMouseDown(true);
  const handleMouseUp = () => setIsMouseDown(false);

  return (
    <div>
      <CanvasInputs
        name={name}
        setName={setName}
        frames={frames}
        setFrames={setFrames}
        color={color}
        setColor={setColor}
        setPixelCount={setPixelCount}
      />
      <div
        className={dimensions}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Grid tiles={tiles} isMouseDown={isMouseDown} color={color} />
      </div>
    </div>
  );
}

export default Canvas;
