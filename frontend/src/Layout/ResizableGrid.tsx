import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import AddItemForm from "../Forms/AddItem";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const ResizableDraggableBox = () => {
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);
  const nodeRef3 = useRef(null);

  return (
    <Box>
      <AddItemForm />
      <Box sx={{ display: "flex", justifyContent: "space-around", gap: 1 }}>
        <Draggable nodeRef={nodeRef1}>
          <div ref={nodeRef1}>
            <Resizable
              style={style}
              defaultSize={{
                width: 200,
                height: 200,
              }}
              enable={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true,
              }}
            >
              <Box>001</Box>
            </Resizable>
          </div>
        </Draggable>
        <Draggable nodeRef={nodeRef2}>
          <div ref={nodeRef2}>
            <Resizable
              style={style}
              defaultSize={{
                width: 200,
                height: 200,
              }}
            >
              <Box>002</Box>
            </Resizable>
          </div>
        </Draggable>
        <Draggable nodeRef={nodeRef3}>
          <div ref={nodeRef3}>
            <Resizable
              style={style}
              defaultSize={{
                width: 200,
                height: 200,
              }}
            >
              <Box>003</Box>
            </Resizable>
          </div>
        </Draggable>
      </Box>
    </Box>
  );
};

export default ResizableDraggableBox;
