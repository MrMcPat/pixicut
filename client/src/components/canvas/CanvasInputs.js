import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CanvasInputs() {
  const [name, setName] = useState("");
  const [frames, setFrames] = useState(1);
  const [dimensions, setDimensions] = useState("");
  const self = useSelector((state) => state.self.me);
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/drawings", {
        user_id: self.id,
        name: name,
        frame_count: frames,
        dimensions: dimensions,
        is_ready: false,
        like_count: 0,
        user_liked: [],
      })
      .then((resp) => navigate(`/createdrawing/${resp.data.id}`));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name of drawing:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Number of frames</label>
      <input
        type="range"
        min="1"
        max="20"
        value={frames}
        onChange={(e) => setFrames(e.target.value)}
      />
      <br />
      <label>Choose dimensions</label>
      <select onChange={(e) => setDimensions(e.target.value)}>
        <option value="">Select dimensions</option>
        <option value="eightbyeight-container">8x8 Grid</option>
        <option value="sixteenbysixteen-container">16x16 Grid</option>
      </select>
      <br />
      <button type="submit">Draw!</button>
    </form>
  );
}

export default CanvasInputs;
