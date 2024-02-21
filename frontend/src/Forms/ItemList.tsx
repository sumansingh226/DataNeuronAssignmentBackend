import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

interface Item {
  name: string;
  description: string;
}

const ItemsList: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item.name} secondary={item.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default ItemsList;
