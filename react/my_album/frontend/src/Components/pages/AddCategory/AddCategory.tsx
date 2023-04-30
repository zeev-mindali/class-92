import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import "./AddCategory.css";
import { useState } from "react";
import { Category } from "../../Modal/Category";
import { useNavigate } from "react-router-dom";
import { store } from "../../redux/Store";
import { addCategoryAction } from "../../redux/CategoriesReducer";

function AddCategory(): JSX.Element {
  const [newCategory, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  const handleAddButton = () => {
    store.dispatch(
      addCategoryAction(
        new Category(
          store.getState().category.categories.length + 1,
          newCategory
        )
      )
    );

    localStorage.setItem(
      "categories",
      JSON.stringify(store.getState().category.categories)
    );
    navigate("/");
  };

  return (
    <div className="AddCategory">
      <div className="Box">
        <Typography variant="h4" className="Headline">
          Add Category
        </Typography>
        <hr />
        <TextField
          label="Category name"
          variant="outlined"
          style={{ marginTop: 20 }}
          onKeyUp={(args) => {
            setCategory((args.target as HTMLInputElement).value);
          }}
        />
        <br />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          className="myButtons"
        >
          <Button color="primary" onClick={handleAddButton}>
            Add
          </Button>
          <Button color="secondary">Cacnel</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default AddCategory;
