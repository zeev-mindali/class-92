import { SyntheticEvent, useEffect, useState } from "react";
import "./AddNewCategory.css";
import { useNavigate } from "react-router-dom";
import { youtube } from "../../Redux/Store";
import {
  addCategoryAction,
  downloadCategoryAction,
} from "../../Redux/CategoriesReducer";
import { Category } from "../../modal/Category";
import axios from "axios";

function AddNewCategory(): JSX.Element {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const myCategory = (args: SyntheticEvent) => {
    let value = (args.target as HTMLInputElement).value;
    setCategory(value);
  };

  useEffect(() => {
    if (youtube.getState().category.categories.length < 1) {
      axios
        .get("http://localhost:4000/api/v1/songs/getCat")
        .then((response) => response.data)
        .then((data) => youtube.dispatch(downloadCategoryAction(data)));
    }
  }, []);

  const addNewCat = () => {
    // let categories;
    // if (localStorage.getItem("category")){
    //     // what i need to do if i already have categories???
    //    categories = JSON.parse(localStorage.getItem("Categories") as any);
    //    categories.push(category)
    //    localStorage.setItem("Categories",JSON.stringify(categories));
    // } else {
    //    //if i don't have any categories....
    //    categories = [];
    //    categories.push(category)
    //    localStorage.setItem("Categories",JSON.stringify(categories));
    // }
    // let categories = localStorage.getItem("Categories")
    //   ? JSON.parse(localStorage.getItem("Categories") as any)
    //   : [];
    // if (categories.includes(category)) {
    //   alert("i have this shit");
    //   return;
  };

  //   const newCategory = new Category(
  //     youtube.getState().category.categories.length + 1,
  //     category
  //   );
  // categories.push(newCategory);
  // localStorage.setItem("Categories", JSON.stringify(categories));
  // youtube.dispatch(addCategoryAction(newCategory));
  //youtube.getState().category.categories.push(newCategory); => will not work since getting straiעght to events will not
  //fire the redux
  //navigate("/");

  return (
    <div className="AddNewCategory">
      <div className="Box">
        <input
          placeholder="Category name..."
          onKeyUp={(args) => {
            setCategory(args.currentTarget.value);
          }}
        />
        <input type="submit" value="add" onClick={addNewCat} />
      </div>
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {youtube.getState().category.categories.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>✏</td>
              <td>❌</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddNewCategory;
