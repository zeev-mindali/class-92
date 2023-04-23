import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useEffect, useState } from "react";
import { youtube } from "../../Redux/Store";
import { downloadCategoryAction } from "../../Redux/CategoriesReducer";

function Menu(): JSX.Element {
  //const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("Categories")) {
      //setCategories(JSON.parse(localStorage.getItem("Categories") as any));
      youtube.dispatch(
        downloadCategoryAction(
          JSON.parse(localStorage.getItem("Categories") as any)
        )
      );
      setRefresh(!refresh);
    }
  }, []);

  youtube.subscribe(() => {
    setRefresh(!refresh);
  });

  return (
    <div className="Menu">
      <h2>Main Menu</h2>
      <hr />
      <NavLink to="/">All Songs</NavLink>
      <br />
      <br />
      <NavLink to="/addSong">Add Song</NavLink>
      <br />
      <br />
      <NavLink to="/addCategory">Add Category</NavLink>
      <br />
      <br />
      <NavLink to="/search">Song Search</NavLink>
      <br />
      <br />
      <NavLink to="/favorites">Favorites</NavLink>
      <br />
      <br />
      <NavLink to="/about">About Us</NavLink>
      <hr />
      <div className="myCategories">
        {youtube.getState().category.categories.map((item) => {
          return <h3 key={item.id}>{item.name}</h3>;
        })}
      </div>
    </div>
  );
}

export default Menu;
