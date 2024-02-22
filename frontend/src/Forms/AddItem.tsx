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
  TablePagination,
} from "@mui/material";
import {
  addItem,
  fetchApiCounts,
  fetchItems,
  updateItemById,
} from "./AddItemServices";
import useStyles from "./AddItem.Styles";

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
    page: number;
    rowsPerPage: number;
  }>({
    name: "",
    description: "",
    items: [],
    selectedItem: null,
    addApiCalls: 0,
    updateApiCalls: 0,
    page: 0,
    rowsPerPage: 5,
  });

  const {
    name,
    description,
    items,
    selectedItem,
    addApiCalls,
    updateApiCalls,
    page,
    rowsPerPage,
  } = state;

  useEffect(() => {
    fetchInitialData();
  }, [addApiCalls, updateApiCalls, items]);

  const fetchInitialData = async () => {
    try {
      const [apiCounts, allItems] = await Promise.all([
        fetchApiCounts(),
        fetchItems(),
      ]);
      setState((prevState) => ({
        ...prevState,
        addApiCalls: apiCounts?.addApiCount ?? 0,
        updateApiCalls: apiCounts?.updateApiCount ?? 0,
        items: allItems,
      }));
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setState((prevState) => ({ ...prevState, page: newPage }));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    }));
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
          fetchInitialData(),
        ]);
      } else {
        const newItem: Item = { name, description };
        setState((prevState) => ({
          ...prevState,
          items: [...items, newItem],
        }));
        await Promise.allSettled([addItem(newItem), fetchInitialData()]);
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
      <Box className={classes.container}>
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
          </form>
        </Paper>
        <Box sx={{ p: 2, width: "100%" }}>
          <Paper className={classes.itemList}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, index) => (
                      <TableRow
                        key={index}
                        onClick={() => handleItemClick(item)}
                        className={classes.listItem}
                      >
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.description}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5]}
              component="div"
              count={items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AddItemForm;
