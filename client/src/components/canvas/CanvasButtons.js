import React from "react";

function CanvasButtons({ getImage, downloadScreenshot, handleErase }) {
  return (
    <div>
      <button onClick={getImage}>Save</button>
      <button onClick={downloadScreenshot}>Download</button>
      <button onClick={handleErase}>Erase</button>
    </div>
  );
}

export default CanvasButtons;
