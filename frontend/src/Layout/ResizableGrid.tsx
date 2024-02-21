import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import AddItemForm from "../Forms/AddItem";
import useStyles from "./ResizableGrid.Styles";
import { Box, Typography } from "@mui/material";

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
    <>
      {" "}
      <AddItemForm />
      <div style={{ display: "flex" }}>
        <Box className={classes.resizableBox}>
          <Typography variant="h6">Box 1</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            urna eget nunc posuere suscipit. Donec vitae est justo. Mauris non
            metus nisi.
          </Typography>
        </Box>
        <Box className={classes.resizableBox}>
          <Typography variant="h6">Box 2</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            urna eget nunc posuere suscipit. Donec vitae est justo. Mauris non
            metus nisi.
          </Typography>
        </Box>
        <Box className={classes.resizableBox}>
          <Typography variant="h6">Box 3</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            urna eget nunc posuere suscipit. Donec vitae est justo. Mauris non
            metus nisi.
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default ResizableComponent;
