import React from "react";

function CanvasInputs({ name, setName, frames, setFrames, color, setColor }) {
  return (
    <div>
      <label>Name of drawing:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Number of frames:</label>
      <input
        type="range"
        min="1"
        max="20"
        value={frames}
        onChange={(e) => setFrames(e.target.value)}
      ></input>
      <br />
      <label>Choose a color</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default CanvasInputs;
