import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import "./AddCategory.css";
import { useState } from "react";
import { Category } from "../../Modal/Category";

function AddCategory(): JSX.Element {
  const [newCategory, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  const handleAddButton = () => {
    let temp = categories;
    console.log(newCategory);
    temp.push(new Category(categories.length + 1, newCategory));
    setCategories(temp);
    console.log(temp);
    localStorage.setItem("categories", JSON.stringify(temp));
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
