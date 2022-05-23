import React, { useState, useEffect, createRef } from "react";
import "./Canvas.css";
import axios from "axios";
import { useSelector } from "react-redux";
import CanvasButtons from "./CanvasButtons";
import Grid from "./Grid";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { useParams } from "react-router-dom";

function Canvas() {
  const [color, setColor] = useState("#000000");
  const [tiles, setTiles] = useState([]);
  const [dimensions, setDimensions] = useState("");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [image, takeScreenShot] = useScreenshot();
  const ref = createRef(null);
  const drawings = useSelector((state) => state.users.drawings);

  const { id } = useParams();
  const drawing = drawings.find((drawing) => drawing.id === parseInt(id));

  useEffect(() => {
    if (drawing) {
      if (drawing.dimensions === "eightbyeight-container") {
        let array = [];
        for (let i = 0; i < 64; i++) {
          array.push(i);
        }
        setTiles(array);
        setDimensions(drawing.dimensions);
      } else {
        let array = [];
        for (let i = 0; i < 256; i++) {
          array.push(i);
        }
        setTiles(array);
        setDimensions(drawing.dimensions);
      }
    }
  }, [drawing]);

  if (!drawing) return null;

  const handleMouseDown = () => setIsMouseDown(true);
  const handleMouseUp = () => setIsMouseDown(false);

  const handleErase = () => setColor("");

  const getImage = () => takeScreenShot(ref.current);

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  function handleFrames() {
    axios.post("/frames", {
      drawing_id: parseInt(id),
      image_url: image,
    });
  }

  return (
    <div>
      <label>Choose a color</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <CanvasButtons
        getImage={getImage}
        downloadScreenshot={downloadScreenshot}
        handleErase={handleErase}
      />
      <div
        className={dimensions}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        ref={ref}
      >
        <Grid tiles={tiles} isMouseDown={isMouseDown} color={color} />
      </div>
      <br />
      <h3>Preview</h3>
      {image && (
        <>
          <img src={image} style={{ width: "325px" }} />
          <button onClick={handleFrames}>Save frame</button>
        </>
      )}
    </div>
  );
}

export default Canvas;
