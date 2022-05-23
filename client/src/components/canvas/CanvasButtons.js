import React from "react";

function CanvasButtons({ getImage, downloadScreenshot, handleErase }) {
  return (
    <div>
      <button onClick={getImage}>Preview</button>
      <button onClick={downloadScreenshot}>Download</button>
      <button onClick={handleErase}>Erase</button>
    </div>
  );
}

export default CanvasButtons;
