import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  addItem,
  fetchApiCounts,
  fetchItems,
  updateItemById,
} from "./AddItemServices";

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

  const [state, setState] = useState<{
    name: string;
    description: string;
    items: Item[];
    selectedItem: Item | null;
    addApiCalls: number;
    updateApiCalls: number;
  }>({
    name: "",
    description: "",
    items: [],
    selectedItem: null,
    addApiCalls: 0,
    updateApiCalls: 0,
  });

  const {
    name,
    description,
    items,
    selectedItem,
    addApiCalls,
    updateApiCalls,
  } = state;

  useEffect(() => {
    getApisCounts();
  }, []);

  const getApisCounts = async () => {
    try {
      const data: any = await fetchApiCounts();
      const allItems: any[] = await fetchItems();
      setState((prevState) => ({
        ...prevState,
        addApiCalls: data.addApiCount,
        updateApiCalls: data.updateApiCount,
        items: [...allItems],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;
    try {
      if (selectedItem) {
        const updatedItems = items.filter(
          (item) => item._id === selectedItem._id
        );
        setState((prevState) => ({
          ...prevState,
          items: updatedItems,
          selectedItem: null,
        }));
        await Promise.allSettled([
          updateItemById(selectedItem._id, selectedItem),
          getApisCounts(),
        ]);
      } else {
        const newItem: Item = { name, description };
        setState((prevState) => ({
          ...prevState,
          items: [...items, newItem],
        }));
        await Promise.allSettled([addItem(newItem), getApisCounts()]);
      }
      setState((prevState) => ({
        ...prevState,
        name: "",
        description: "",
      }));
    } catch (error) {
      console.error("Error handling form submission:", error);
    }
  };

  const handleItemClick = (item: Item) => {
    setState((prevState) => ({
      ...prevState,
      selectedItem: item,
      name: item.name,
      description: item.description,
    }));
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
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
              if (selectedItem) {
                const updatedSelectedItem = {
                  ...selectedItem,
                  name: e.target.value,
                };
                setState((prevState) => ({
                  ...prevState,
                  selectedItem: updatedSelectedItem,
                }));
              }
            }}
            required
          />
          <TextField
            sx={{ p: 1, m: 1 }}
            label="Description"
            value={description}
            onChange={(e) => {
              setState({ ...state, description: e.target.value });
              if (selectedItem) {
                const updatedSelectedItem = {
                  ...selectedItem,
                  description: e.target.value,
                };
                setState((prevState) => ({
                  ...prevState,
                  selectedItem: updatedSelectedItem,
                }));
              }
            }}
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
      <Box sx={{ p: 2 }}>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow
                    key={index}
                    onClick={() => handleItemClick(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddItemForm;
