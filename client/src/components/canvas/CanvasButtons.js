import React from "react";

function CanvasButtons({
  setPixelCount,
  getImage,
  downloadScreenshot,
  handleErase,
}) {
  const toggleEightByEight = () => setPixelCount(64);
  const toggleSixteenBySixteen = () => setPixelCount(256);
  return (
    <div>
      <button onClick={toggleEightByEight}>8x8 Grid</button>
      <button onClick={toggleSixteenBySixteen}>16x16 Grid</button>
      <button>Create another frame</button>
      <button onClick={getImage}>Save</button>
      <button onClick={downloadScreenshot}>Download</button>
      <button onClick={handleErase}>Erase</button>
    </div>
  );
}

export default CanvasButtons;
