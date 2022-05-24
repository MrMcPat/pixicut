import React, { useState, useEffect, createRef } from "react";
import "./Canvas.css";
import axios from "axios";
import CanvasButtons from "./CanvasButtons";
import Grid from "./Grid";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Canvas() {
  const [drawing, setDrawing] = useState([]);
  const [color, setColor] = useState("#000000");
  const [tiles, setTiles] = useState([]);
  const [dimensions, setDimensions] = useState("");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [counter, setCounter] = useState(0);
  const [image, takeScreenShot] = useScreenshot();
  const ref = createRef(null);
  const { id } = useParams();
  const frames = useSelector((state) => state.users.frames);
  const [frameList, setFrameList] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      const drawingData = await axios.get(`/drawings/${parseInt(id)}`);
      setDrawing(drawingData.data);
      setFrameList(frames.filter((frame) => frame.drawing_id === parseInt(id)));
      if (drawingData.data.dimensions === "eightbyeight-container") {
        let array = [];
        for (let i = 0; i < 64; i++) {
          array.push(i);
        }
        setTiles(array);
        setDimensions(drawingData.data.dimensions);
      } else {
        let array = [];
        for (let i = 0; i < 256; i++) {
          array.push(i);
        }
        setTiles(array);
        setDimensions(drawingData.data.dimensions);
      }
    }
    handleFetch();
  }, [frames]);

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
    setCounter(counter + 1);
    setFrameList([
      ...frameList,
      {
        drawing_id: parseInt(id),
        id: new Date(),
        image_url: image,
      },
    ]);
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
      {image && (
        <>
          <h3>Preview</h3>
          <img src={image} style={{ width: "325px" }} alt="preview" />
          <button
            onClick={handleFrames}
            disabled={drawing.frame_count === frameList.length ? true : false}
          >
            Save frame
          </button>
        </>
      )}
      <br />
      <div>
        {frameList.map((frame) => (
          <img
            src={frame.image_url}
            style={{ width: "225px" }}
            key={frame.id}
            alt="frame"
          />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
