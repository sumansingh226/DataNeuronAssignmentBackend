import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { addItem, fetchApiCounts, updateItemById } from "./AddItemServices";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "400px",
    margin: "auto",
    padding: "1rem",
    marginBottom: 1,
  },
  itemList: {
    border: "1px solid gray",
    marginTop: "2rem",
    padding: "1rem",
  },
  listItem: {
    cursor: "pointer",
  },
});

interface Item {
  _id?: any;
  name: string;
  description: string;
}

const AddItemForm: React.FC = () => {
  const classes = useStyles();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [addApiCalls, setAddApiCalls] = useState<number>(0);
  const [updateApiCalls, setUpdateApiCalls] = useState<number>(0);

  useEffect(() => {
    getApisCounts();
  }, []);

  const getApisCounts = async () => {
    try {
      const data: any = await fetchApiCounts();
      setAddApiCalls(data.addApiCount);
      setUpdateApiCalls(data.updateApiCount);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;
    if (selectedItem) {
      const updatedItems = items.map((item) =>
        item._id === selectedItem._id ? { ...item, name, description } : item
      );
      setItems(updatedItems);
      setSelectedItem(null);
      updateItemById("65d5238627968decdb2530fb");
    } else {
      const newItem: Item = {
        name,
        description,
      };
      setItems([...items, newItem]);
      addItem(newItem);
    }
    setName("");
    setDescription("");
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setName(item.name);
    setDescription(item.description);
  };

  return (
    <Box>
      <Paper className={classes.form} elevation={3}>
        <Typography variant="h5">
          {selectedItem ? "Edit Item" : "Add Item"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ p: 1, m: 1 }}
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            sx={{ p: 1, m: 1 }}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{ p: 1, m: 1 }}
              type="submit"
              variant="contained"
              color="primary"
            >
              {selectedItem ? "Edit Item" : "Add Item"}
            </Button>

            <Box>
              <Typography>Add API Calls: {addApiCalls}</Typography>
              <Typography>Update API Calls: {updateApiCalls}</Typography>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddItemForm;
