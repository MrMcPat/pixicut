import React, { useState, useEffect, createRef } from "react";
import "./Canvas.css";
import CanvasButtons from "./CanvasButtons";
import Grid from "./Grid";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { useParams } from "react-router-dom";

function Canvas() {
  const [color, setColor] = useState("#000000");
  const [pixelCount, setPixelCount] = useState(64);
  const [tiles, setTiles] = useState([]);
  const [dimensions, setDimensions] = useState("eightbyeight-container");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot();
  const { id } = useParams();

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

  const handleErase = () => setColor("#ffffff");

  const getImage = () => takeScreenShot(ref.current);

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

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
    </div>
  );
}

export default Canvas;
