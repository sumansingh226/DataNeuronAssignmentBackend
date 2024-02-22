import React from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { Grid, Paper, Box } from "@mui/material";
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
    <Box>
      <Grid container spacing={2} p={2}>
        <Grid item xs={6}>
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
      <AddItemForm />
    </Box>
  );
};

export default ResizableDraggableBox;
