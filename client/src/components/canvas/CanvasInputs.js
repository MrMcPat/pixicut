import React from "react";

function CanvasInputs({ name, setName, color, setColor }) {
  return (
    <div>
      <label>Name of drawing:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
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
