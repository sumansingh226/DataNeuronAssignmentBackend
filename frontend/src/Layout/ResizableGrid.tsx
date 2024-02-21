import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import AddItemForm from "../Forms/AddItem";
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
    <AddItemForm />
    // </Draggable>
  );
};

export default ResizableComponent;
