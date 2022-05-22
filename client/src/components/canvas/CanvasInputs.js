import React from "react";

function CanvasInputs({
  name,
  setName,
  frames,
  setFrames,
  color,
  setColor,
  setPixelCount,
}) {
  const toggleEightByEight = () => setPixelCount(64);
  const toggleSixteenBySixteen = () => setPixelCount(256);
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
      <br />
      <button onClick={toggleEightByEight}>8x8 Grid</button>
      <button onClick={toggleSixteenBySixteen}>16x16 Grid</button>
    </div>
  );
}

export default CanvasInputs;
