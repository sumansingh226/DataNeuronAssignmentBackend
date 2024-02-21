import React from "react";
import { Resizable } from "react-resizable";
import Draggable from "react-draggable";

const ResizableDraggableBox: React.FC = () => {
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);
  const [deltaX, setDeltaX] = React.useState(0);
  const [deltaY, setDeltaY] = React.useState(0);

  const handleResize = (event: any, { size }: any) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  const handleDrag = (event: any, { deltaX, deltaY }: any) => {
    setDeltaX(deltaX);
    setDeltaY(deltaY);
  };

  return (
    // <Draggable onDrag={handleDrag}>
    <Resizable
      width={width}
      height={height}
      onResize={handleResize}
      minConstraints={[100, 100]}
      maxConstraints={[400, 400]}
    >
      <div
        style={{
          background: "lightblue",
          width: width + "px",
          height: height + "px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Resizable and Draggable Box
      </div>
    </Resizable>
    // </Draggable>
  );
};

export default ResizableDraggableBox;
