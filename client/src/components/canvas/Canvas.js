import React, { useState, useEffect, createRef } from "react";
import "./Canvas.css";
import CanvasInputs from "./CanvasInputs";
import CanvasButtons from "./CanvasButtons";
import Grid from "./Grid";
import { useScreenshot, createFileName } from "use-react-screenshot";

function Canvas() {
  const [name, setName] = useState("");
  const [frames, setFrames] = useState(1);
  const [color, setColor] = useState("#000000");
  const [pixelCount, setPixelCount] = useState(64);
  const [tiles, setTiles] = useState([]);
  const [dimensions, setDimensions] = useState("eightbyeight-container");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot();

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
      <CanvasInputs
        name={name}
        setName={setName}
        frames={frames}
        setFrames={setFrames}
        color={color}
        setColor={setColor}
      />
      <CanvasButtons
        setPixelCount={setPixelCount}
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
