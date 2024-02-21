import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import useStyles from "./ResizableGrid.Styles";

const ResizableComponent: React.FC = () => {
  const classes = useStyles();
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 200,
    height: 200,
  });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (position && ref.current) {
      const newWidth = Math.max(50, size.width + e.clientX - position.x);
      const newHeight = Math.max(50, size.height + e.clientY - position.y);
      setSize({
        width: newWidth,
        height: newHeight,
      });
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setPosition(null);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    // <Draggable>
    <div>
      <div
        ref={ref}
        className={classes.resizable}
        style={{ width: size.width, height: size.height }}
        onMouseDown={handleMouseDown}
      >
        <div className={`${classes.handle} ${classes.topLeft}`} />
        <div className={`${classes.handle} ${classes.topRight}`} />
        <div className={`${classes.handle} ${classes.bottomLeft}`} />
        <div className={`${classes.handle} ${classes.bottomRight}`} />
        Resizable Component
      </div>
      <div className={classes.resizable} style={{ width: 300, height: 300 }}>
        Fixed Size 1
      </div>
      <div className={classes.resizable} style={{ width: 400, height: 400 }}>
        Fixed Size 2
      </div>
    </div>
    // </Draggable>
  );
};

export default ResizableComponent;
