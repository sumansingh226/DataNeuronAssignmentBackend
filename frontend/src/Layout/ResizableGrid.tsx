import React from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { Grid, Paper } from "@mui/material";
import AddItemForm from "../Forms/AddItem";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const ResizableDraggableBox = () => {
  return (
    <Grid
      container
      spacing={2}
      p={2}
      sx={{ background: "red", width: "100vw", height: "100vh" }}
    >
      <Grid item xs={6}>
        <Draggable>
          <Resizable
            style={{ border: "1px solid gray" }}
            defaultSize={{
              width: 520,
              height: 600,
            }}
          >
            <AddItemForm />
          </Resizable>
        </Draggable>
      </Grid>
      <Grid item xs={3}>
        <Draggable>
          <Resizable
            style={style}
            defaultSize={{
              width: 200,
              height: 200,
            }}
          >
            <Paper>Box 1</Paper>
          </Resizable>
        </Draggable>
      </Grid>
      <Grid item xs={3}>
        <Draggable>
          <Resizable
            style={style}
            defaultSize={{
              width: 200,
              height: 200,
            }}
          >
            <Paper>Box 2</Paper>
          </Resizable>
        </Draggable>
      </Grid>
    </Grid>
  );
};

export default ResizableDraggableBox;
