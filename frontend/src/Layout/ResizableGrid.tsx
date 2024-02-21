import React, { useRef, useState } from "react";
import AddItemForm from "../Forms/AddItem";
import useStyles from "./ResizableGrid.Styles";
import { Box, Typography } from "@mui/material";

const ResizableComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <>
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
